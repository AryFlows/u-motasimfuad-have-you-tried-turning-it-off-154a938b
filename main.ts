import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Have you tried turning it off and on again? Wonderful. Now do it once more, slowly, so the computer knows we mean it this time.";

if (entry.length < 1 || entry.length > 199 || !entry.trim()) {
  throw new Error(`entry must be 1-199 non-blank characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
