import express from 'express';

const grades = {};
let nextId = 1;
const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

// for review (lines 19-22)
app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.status(201).send(req.body);
}
);

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
