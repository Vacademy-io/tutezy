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
const CRM_AUDIENCE_ID = "530d6365-808a-424d-ba6c-80a05ec9b233";

const CRM_FIELD = {
  fullName: "46d26332-cf27-4db0-955e-f5fec2a95f23",
  email: "307817d3-357a-4db3-a1c2-cbfbe491ef44",
  phone: "0884ac17-d227-49bc-be04-e7ca541eb1d1",
  designation: "b3a88220-ea06-4f87-a812-ef51aae5bcbe",
  instituteName: "aa7667ac-1e34-41a6-ba4d-eaa384656b90",
  campaignName: "784b5a53-f21e-435f-bc45-14c5b89e364c",
} as const;

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

export async function submitDemoLead(lead: DemoLead): Promise<{ ok: boolean; note?: string; duplicate?: boolean }> {
  const name = lead.name.trim();
  const email = (lead.email || "").trim();
  const fullPhone = lead.phone.trim() ? `${lead.countryCode}${lead.phone}`.replace(/[^+\d]/g, "") : "";
  const custom: Record<string, string> = {};
  custom[CRM_FIELD.fullName] = name;
  if (email) custom[CRM_FIELD.email] = email;
  if (fullPhone) custom[CRM_FIELD.phone] = fullPhone;
  if (lead.organisation) custom[CRM_FIELD.instituteName] = lead.organisation.trim();
  const kindLabel = { institute: "Training/test-prep company", solo: "Course creator", school: "School/university", corporate: "Corporate L&D" }[lead.kind] ?? "Other";
  custom[CRM_FIELD.designation] = [kindLabel, lead.students ? `${lead.students} students` : "", lead.message?.trim() || "", utmNote()]
    .filter(Boolean)
    .join(" · ")
    .slice(0, 500);
  custom[CRM_FIELD.campaignName] = "Tutezy Landing – Book a demo";

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

export function whatsappLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
