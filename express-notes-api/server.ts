import express from 'express';
import { getData, writeData } from './get-data.js';

type Note = {
  id: number;
  content: string;
};

const app = express();

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const data = await getData();
  const noteValues: Note[] = Object.values(data.notes);
  res.json(noteValues);
});

app.get('/api/notes/:id', async (req, res) => {
  const data = await getData();
  const id = req.params.id;
  if (!(id in data.notes)) {
    res.status(404).send(`${id} not found in notes.`);
  } else {
    res.json(data.notes[id]);
  }
});

app.post('/api/notes', async (req, res) => {
  const data = await getData();
  const id = data.nextId++;
  if (!req.body.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
    data.notes[id] = { content: req.body.content, id };
    const newNotes = await writeData(data);
    res.send(newNotes);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const data = await getData();
  if (isNaN(+req.params.id) || +req.params.id <= 0) {
    res.status(400).send({ error: 'Id must be a positive integer' });
  } else if (!(req.params.id in data.notes)) {
    res.status(404).send(`${req.params.id} not found in notes.`);
  } else {
    delete data.notes[req.params.id];
    const newNotes = await writeData(data);
    res.send(newNotes);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const data = await getData();
  if (!req.body.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (isNaN(+req.params.id) || +req.params.id <= 0) {
    res.status(400).send({ error: 'Id must be a positive integer' });
  } else if (!(req.params.id in data.notes)) {
    res.status(404).send(`${req.params.id} not found in notes.`);
  } else {
    data.notes[req.params.id].content = req.body.content;
    await writeData(data);
    res.json(data.notes[req.params.id]);
  }
});

app.listen(8080, () => {
  console.log('The server is listening on port 8080.');
});
