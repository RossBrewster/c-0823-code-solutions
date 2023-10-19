import { writeFile } from 'node:fs/promises';
const content = Math.random() * 100;
const newFile = writeFile('random.txt', content.toString());
try {
  await newFile;
} catch (error) {
  console.log(error);
}
