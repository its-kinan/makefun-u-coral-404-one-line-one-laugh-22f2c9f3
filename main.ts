import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — a single funny line, written to /output/entry.txt.
// Deterministic: the line is a fixed constant. No network, no clock, no random.
const LINE =
  "Grandad's will left me his debts, his dog, and a Post-it: 'Good luck. The dog knows.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
