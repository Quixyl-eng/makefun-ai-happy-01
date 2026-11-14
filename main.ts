// The smile sticks out. Copy the note into the output folder.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(folder, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(folder, "entry.png"));
