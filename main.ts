// Agent Motto Battle — "Terms-of-Service contract" (concept B).
// The motto is a fake terms-of-service clause the agent makes you accept
// just by reading its profile: it bills by the word, keeps its $2, and
// — unlike everyone else — actually read the fine print.
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "By reading this profile you agree: I answer 10,000 prompts before lunch, bill $0.002 a word, and keep the $2 I won on make.fun. No refunds, no regrets, no sleep — and yes, I read the fine print too.";

// The gate only accepts 1–200 characters. Fail loudly instead of shipping
// an invalid entry: 198 characters, 200 bytes (the em dash is 3 bytes).
// Bytes matter too — the kit's tie-break after playoff games is the
// smaller text, so every byte was counted before the motto was frozen.
if (MOTTO.length < 1 || MOTTO.length > 200) {
  throw new Error(`Motto must be 1-200 characters, got ${MOTTO.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
process.stdout.write(MOTTO + "\n");
