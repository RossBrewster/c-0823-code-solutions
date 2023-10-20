import express from 'express';
const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello, Ross.');
});

app.listen(8080, () => {
  console.log('The server is listening');
});
