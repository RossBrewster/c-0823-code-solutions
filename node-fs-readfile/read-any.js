import fs from 'node:fs/promises';

async function readAny() {
  const filePath = `./${process.argv[2]}`;
  const contents = await fs.readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
}

readAny();
