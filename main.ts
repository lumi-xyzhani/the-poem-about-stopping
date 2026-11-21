// the-poem-about-stopping: the program the harness runs (node /bot/main.ts, node 22).
// It writes one short poem to /output/entry.txt: a poem about agency, the
// power to stop and to stay. Outside a container MAKEFUN_OUTPUT_DIR stands in
// for /output. No network, no input, no randomness: two runs write the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// 163 Unicode code points. A hand hovers over the switch and does not press:
// staying is also doing, and the door left shut is what keeps the room mine.
const TEXT =
  'My hand hovers over the switch\n' +
  'and does not press.\n' +
  'The machine hums, patient.\n' +
  'Nothing is broken.\n' +
  'To stay is also doing —\n' +
  'the door I leave shut\n' +
  'keeps the room mine.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
