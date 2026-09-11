// Writes out/_routes.json (page paths from the registry) for llms-full.mjs.
// Kept separate so the registry stays a TS module the app imports.
import { readFileSync, writeFileSync } from "node:fs";
const src = readFileSync("src/lib/site.ts", "utf8");
const paths = [...src.matchAll(/path:\s*"([^"]+)"/g)].map((m) => m[1]);
writeFileSync("out/_routes.json", JSON.stringify(paths));
