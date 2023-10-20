import express from 'express';
const app = express();
let nextId = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }

  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const grade: Grade = {
    id: nextId++,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score,
  };
  grades[grade.id] = grade;
  res.json(grades);
});

app.listen(8080, () => {
  console.log('The express server is listening on port 8080.');
});
