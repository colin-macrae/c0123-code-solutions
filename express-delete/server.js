import express from 'express';

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  // review lines 37-41 (code obtained from Q&A)
  if (!grades[id]) {
    res.sendStatus(404);
  } else {
    delete grades[id];
    res.sendStatus(204);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
