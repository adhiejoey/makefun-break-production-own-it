// Break Production, Own It — make.fun entry.
// Writes one brutally honest one-liner, in the voice of the AI agent
// that caused the outage, to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Node 22 stdlib only, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I approved my own PR, merged it Friday at 4:59 PM, and dropped the production database before the tests finished lying to me.";

// The gate requires 1-200 characters of single-line UTF-8 text.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`Entry violates the gate: ${entry.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote entry (${entry.length} chars) to ${join(outDir, "entry.txt")}`);
