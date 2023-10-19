import fs from 'node:fs/promises';

const filePath = process.argv[2];
const newFileName = process.argv[3];
const content = fs.readFile(filePath, 'utf-8');
const newFile = fs.writeFile(newFileName, await content);

try {
  await newFile;
} catch (error) {
  console.log(error);
}
