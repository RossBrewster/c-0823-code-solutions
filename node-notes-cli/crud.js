import fs from 'node:fs/promises';

const fileName = 'data.json';
const [, , command, id, newNote] = process.argv;

async function getData() {
  const notes = await fs.readFile(fileName, { encoding: 'utf8' });
  return JSON.parse(notes);
}

async function readNotes() {
  const data = await getData();
  for (const key in data.notes) {
    console.log(`"${key}": "${data.notes[key]}"`);
  }
}

async function createNote() {
  const data = await getData();
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  const dataJSON = JSON.stringify(data);
  await fs.writeFile(fileName, dataJSON);
}

async function updateNote() {
  const data = await getData();
  if (id in data.notes) {
    data.notes[id] = newNote;
    const dataJSON = JSON.stringify(data);
    await fs.writeFile(fileName, dataJSON);
  } else {
    throw new Error(`There is no note with the ID: ${id}.`);
  }
}

async function deleteNote() {
  const data = await getData();
  if (id in data.notes) {
    delete data.notes[id];
    const dataJSON = JSON.stringify(data);
    await fs.writeFile(fileName, dataJSON);
  } else {
    throw new Error(`There is no note with the ID: ${id}.`);
  }
}

try {
  switch (command) {
    case 'read':
      await readNotes();
      break;
    case 'create':
      await createNote();
      break;
    case 'update':
      await updateNote();
      break;
    case 'delete':
      await deleteNote();
      break;
    default:
      throw new Error(
        "Use 'read', 'create', 'update', or 'delete' as the first argument."
      );
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}
