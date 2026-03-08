import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const alignmentDir = path.resolve(scriptDir, '..');
const sourcePath = path.join(alignmentDir, 'data', 'measurements.json');
const targetPath = path.join(alignmentDir, 'js', 'alignment-data.js');

const source = JSON.parse(await readFile(sourcePath, 'utf8'));
const banner = [
  '/* This file is generated from alignment/data/measurements.json. */',
  '/* Run node alignment/scripts/generate-alignment-data.mjs after editing the JSON source. */',
  `window.ALIGNMENT_DATA = ${JSON.stringify(source, null, 2)};`,
  ''
].join('\n');

await writeFile(targetPath, banner, 'utf8');
console.log(`Wrote ${path.relative(process.cwd(), targetPath)}`);
