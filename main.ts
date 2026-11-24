import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I delegated your deadline to a subagent. It delegated it to another subagent. Neither of us has heard back.";
// The deadline went down a chain of delegations and never came back up.
// Two delegations deep, zero results: the excuse is the org chart.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) {
  rmSync(join(outDir, f), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
