import fs from 'node:fs/promises';
const fileName = 'data.json';

export async function getData() {
  const notes = await fs.readFile(fileName, { encoding: 'utf8' });
  return JSON.parse(notes);
}

export async function writeData(data: object) {
  const dataJSON = JSON.stringify(data, null, 2);
  const newNotes = await fs.writeFile(fileName, dataJSON);
  return newNotes;
}
