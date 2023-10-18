import fs from 'node:fs/promises';

const content = process.argv[2];
const newFile = fs.writeFile('note.txt', content);

try {
  await newFile;
} catch (error) {
  console.log(error);
}
