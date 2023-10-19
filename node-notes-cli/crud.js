import fs from 'node:fs/promises';

const fileName = 'data.json';
const [, , command, id, newNote] = process.argv;

async function readNotes() {
  const notes = await fs.readFile(fileName, { encoding: 'utf8' });
  const parsed = JSON.parse(notes);
  for (const key in parsed.notes) {
    console.log(`"${key}": "${parsed.notes[key]}"`);
  }
}

async function createNote() {
  const notes = await fs.readFile(fileName, { encoding: 'utf8' });
  const data = JSON.parse(notes);
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
  const dataJSON = JSON.stringify(data);
  await fs.writeFile(fileName, dataJSON);
}

async function updateNote() {
  const notes = await fs.readFile(fileName, { encoding: 'utf8' });
  const data = JSON.parse(notes);
  if (id in data.notes) {
    data.notes[id] = newNote;
    const dataJSON = JSON.stringify(data);
    await fs.writeFile(fileName, dataJSON);
  } else {
    throw new Error(`There is no note with the ID: ${id}.`);
  }
}

async function deleteNote() {
  const notes = await fs.readFile(fileName, { encoding: 'utf8' });
  const data = JSON.parse(notes);
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
      readNotes();
      break;
    case 'create':
      createNote();
      break;
    case 'update':
      updateNote();
      break;
    case 'delete':
      deleteNote();
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
