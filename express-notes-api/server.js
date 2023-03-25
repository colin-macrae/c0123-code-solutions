import express from 'express';
import * as fsPromises from 'node:fs/promises';

const app = express();

// get all notes
app.get('/api/notes', async (req, res) => {
  try {
    const data = await fsPromises.readFile('data.json', 'utf8');
    const parsedData = JSON.parse(data);
    res.send(Object.values(parsedData.notes));
  } catch (error) {
    console.log(error);
  }
});

// get single note by ID
app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await fsPromises.readFile('data.json', 'utf8');
    const parsedData = JSON.parse(data);
    // res.send(Object.values(parsedData.notes));
    const id = Number(req.params.id);
    console.log(id);
    if (id < 1 || !Number.isInteger(id) || isNaN(id)) {
      res.status(400).send({ error: 'id must be a positive integer' });
    } else if (!data.notes[id]) {
      res.status(404).send({ error: `cannot find note with id ${id}` });
    } else {
      res.status(200).send(parsedData.notes[id]);
    }
  } catch (error) {
    console.log(error);
  }
});

// //////////////////////////////////////////////////////////

// post a new note
app.post('/api/notes', async (req, res) => {
  const data = await fsPromises.readFile('data.json', 'utf8');
  const parsedData = JSON.parse(data);
  const body = req.body;
  try {
    // const newNoteContent = toString(process.arg[3]);
    parsedData.notes[parsedData.nextId] = body;
    parsedData.notes[parsedData.nextId].id = parsedData.nextId;
    await fsPromises.writeFile('data.json', JSON.stringify(parsedData, null, 2));
    parsedData.nextId++;
  } catch (error) {
    console.log(error);
  }
});
// data = parsedData
// notes = parsedData.notes

// //////////////////////////////////////////////////////////

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
// run command with "http get localhost:8080/api/notes"
