import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const alignmentDir = path.resolve(scriptDir, '..');
const replacement = [
  '<link rel="stylesheet" href="styles/shared.css">',
  '<script src="js/alignment-data.js"></script>',
  '<script src="js/alignment-shared.js"></script>',
  '<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>',
].join('\n');

const files = await readdir(alignmentDir);
for (const name of files) {
  if (!name.endsWith('.html') || name === 'summary.html') {
    continue;
  }

  const filePath = path.join(alignmentDir, name);
  const input = await readFile(filePath, 'utf8');
  const match = input.match(/<link href="https:\/\/fonts\.googleapis\.com[^\n]*\n<title>[\s\S]*?<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/chart\.js@4\.4\.1\/dist\/chart\.umd\.min\.js"><\/script>\n<style>[\s\S]*?<\/style>/);
  if (!match) {
    continue;
  }

  const titleMatch = match[0].match(/<title>[\s\S]*?<\/title>/);
  const title = titleMatch ? titleMatch[0] : '';
  const output = input.replace(match[0], `${replacement}\n${title}`.trimEnd());

  if (output !== input) {
    await writeFile(filePath, output, 'utf8');
    console.log(`updated ${name}`);
  }
}
