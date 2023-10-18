import fs from 'node:fs/promises';

async function cat() {
  let contents = '';
  for (let i = 2; i < process.argv.length; i++) {
    const filePath = `./${process.argv[i]}`;
    contents += await fs.readFile(filePath, { encoding: 'utf8' });
  }
  console.log(contents);
}
try {
  cat();
} catch (error) {
  console.log(error);
}
