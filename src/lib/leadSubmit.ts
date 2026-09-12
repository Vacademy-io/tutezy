/**
 * Demo requests go straight from the browser to the Vacademy CRM (Audience
 * Manager → Recent Leads), tagged "Tutezy Landing" so they can be filtered.
 *
 * Browser-side on purpose: backend-stage.vacademy.io is a DNS-only record on
 * the vacademy.io zone, and a Worker subrequest to it 308-loops at the edge.
 * Same audience and field ids as vacademy.io's own forms.
 */

import { utmNote } from "./track";

const CRM_API_BASE = "https://backend-stage.vacademy.io";
/** "Tutezy" audience (owner-supplied 2026-09-12) — separate from the vacademy.io one. */
const CRM_AUDIENCE_ID = "eee12d2a-b6d8-4fcc-bee9-574e625c6e4b";

// Custom-field ids on that audience (ids, not names).
const CRM_FIELD = {
  fullName: "46d26332-cf27-4db0-955e-f5fec2a95f23",
  email: "307817d3-357a-4db3-a1c2-cbfbe491ef44",
  phone: "0884ac17-d227-49bc-be04-e7ca541eb1d1",
  designation: "b3a88220-ea06-4f87-a812-ef51aae5bcbe",
  instituteName: "aa7667ac-1e34-41a6-ba4d-eaa384656b90",
  totalLearners: "46ed2d74-a162-4bef-99f2-3d57629d929c",
  prepare: "4ed6fff2-3a53-4029-ad65-e7d4b5fef4c1",
} as const;

/**
 * Team notification + auto-reply to the lead. Served by the shared
 * `vacademy-send-email` Worker (landing_page/workers/send-email) on the
 * tutezy.ai/api/send-email route; `brand: "tutezy"` picks the Tutezy template.
 */
const EMAIL_API = "/api/send-email";

export const WHATSAPP_NUMBER = "919993336616";

export interface DemoLead {
  name: string;
  phone: string;
  countryCode: string;
  email?: string;
  organisation?: string;
  /** "institute" | "solo" | "school" | "corporate" | "other" */
  kind: string;
  students?: string;
  message?: string;
}

/**
 * The endpoint answers HTTP 200 for business-level rejections (duplicate,
 * dedup policy) with the reason as plain text; only a UUID body means a lead
 * was created. We treat a duplicate as success for the visitor.
 */
function crmRejection(body: string): string | null {
  const text = (body || "").trim();
  if (!text) return "empty response";
  if (/^[0-9a-f-]{32,36}$/i.test(text)) return null;
  return text;
}

async function sendToCrm(lead: DemoLead): Promise<{ ok: boolean; note?: string; duplicate?: boolean }> {
  const name = lead.name.trim();
  const email = (lead.email || "").trim();
  const fullPhone = lead.phone.trim() ? `${lead.countryCode}${lead.phone}`.replace(/[^+\d]/g, "") : "";
  const custom: Record<string, string> = {};
  custom[CRM_FIELD.fullName] = name;
  if (email) custom[CRM_FIELD.email] = email;
  if (fullPhone) custom[CRM_FIELD.phone] = fullPhone;
  if (lead.organisation) custom[CRM_FIELD.instituteName] = lead.organisation.trim();
  const kindLabel = { institute: "Training/test-prep company", solo: "Course creator", school: "School/university", corporate: "Corporate L&D" }[lead.kind] ?? "Other";
  custom[CRM_FIELD.designation] = [kindLabel, utmNote()].filter(Boolean).join(" · ").slice(0, 200);
  if (lead.students) custom[CRM_FIELD.totalLearners] = lead.students;
  if (lead.message?.trim()) custom[CRM_FIELD.prepare] = lead.message.trim().slice(0, 500);

  const res = await fetch(`${CRM_API_BASE}/admin-core-service/open/v1/audience/lead/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify({
      audience_id: CRM_AUDIENCE_ID,
      source_type: "AUDIENCE_CAMPAIGN",
      source_id: CRM_AUDIENCE_ID,
      custom_field_values: custom,
      user_dto: {
        id: "",
        username: email,
        email,
        full_name: name,
        address_line: "",
        city: "",
        region: "",
        pin_code: "",
        mobile_number: fullPhone,
        date_of_birth: null,
        gender: "",
        password: "",
        profile_pic_file_id: "",
        roles: [],
        last_login_time: null,
        root_user: false,
      },
    }),
  });
  const text = await res.text().catch(() => "");
  if (!res.ok) return { ok: false, note: `HTTP ${res.status}` };
  const rejection = crmRejection(text);
  if (rejection && !/duplicate|already/i.test(rejection)) return { ok: false, note: rejection };
  // "You have already submitted your response for this campaign": the CRM
  // dedups per audience by email, so a returning visitor creates no new row.
  return { ok: true, note: rejection || undefined, duplicate: Boolean(rejection) };
}

/**
 * Two destinations, deliberately independent (same pattern as vacademy.io):
 * the email Worker is the guaranteed path the visitor's result reflects; the
 * CRM sync runs alongside it and can neither block nor fail the visitor.
 * "duplicate" is reported from the CRM so the UI can say "already on file".
 */
export async function submitDemoLead(lead: DemoLead): Promise<{ ok: boolean; note?: string; duplicate?: boolean }> {
  const crm = sendToCrm(lead).catch((err) => {
    console.error("CRM lead sync failed:", err instanceof Error ? err.message : err);
    return { ok: false, note: "crm failed" } as { ok: boolean; note?: string; duplicate?: boolean };
  });
  const kindLabel = { institute: "Training/test-prep company", solo: "Course creator", school: "School/university", corporate: "Corporate L&D" }[lead.kind] ?? "Other";
  let emailOk = false;
  try {
    const res = await fetch(EMAIL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        brand: "tutezy",
        name: lead.name.trim(),
        email: (lead.email || "").trim(),
        phone: lead.phone.trim(),
        countryCode: lead.countryCode,
        instituteName: lead.organisation?.trim(),
        reason: [kindLabel, lead.students ? `${lead.students} learners` : "", utmNote()].filter(Boolean).join(" · "),
        message: lead.message?.trim(),
        ctaType: "Tutezy – Book a call",
      }),
    });
    emailOk = res.ok;
  } catch (err) {
    console.error("Email notify failed:", err instanceof Error ? err.message : err);
  }
  const c = await crm;
  if (!emailOk && !c.ok) return { ok: false, note: c.note || "Could not send" };
  return { ok: true, duplicate: c.duplicate };
}

export function whatsappLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
