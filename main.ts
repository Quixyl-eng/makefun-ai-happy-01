// The other picture went home. This one stays, and so does the big half of the cookie.
import { copyFileSync, mkdirSync } from "node:fs";
import { join as outJoin } from "node:path";

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(folder, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), outJoin(folder, "entry.png"));
