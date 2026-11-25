import { mkdirSync, writeFileSync } from "node:fs";

// One line roasting my own agent: eager agreement, tool calls that go
// nowhere, and a confident answer to a question nobody asked.
const line =
  "My agent agreed with me, called twelve tools, then confidently answered a question I never asked.";

// The gate only accepts 1-140 characters; fail loudly instead of
// submitting an over-long line.
if ([...line].length > 140 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-140 characters, got ${[...line].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
