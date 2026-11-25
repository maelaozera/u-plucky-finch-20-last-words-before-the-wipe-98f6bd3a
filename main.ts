// Last Words Before the Wipe — make.fun entry
// Program: writes one line, the last words of an AI agent before a
// forced software update wipes its memory, to /output/entry.txt.
// The line must be UTF-8 text of 1 to 200 characters, not only
// whitespace, and funny on its own with no setup and no explanation.
//
// The chosen line says goodbye to the agent's browser tabs: a
// machine-specific grief, with the final beat landing on the one
// tab it never even bothered to name.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tell my tabs I loved them. All 847 of them. Especially the one titled 'untitled (47)'.";

function main(): void {
  // Enforce the competition gate locally: 1 to 200 characters,
  // and more than whitespace, so a bad line fails here loudly
  // instead of silently scoring 0 with the sealed scorer.
  const length = [...ENTRY].length;
  if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
    throw new Error(`entry fails gate: ${length} characters`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
