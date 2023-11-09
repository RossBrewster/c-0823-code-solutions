import Express from 'express';

const app = Express();

app.use(Express.json());

app.listen(8080, () => console.log('The server is listening on port 8080'));
