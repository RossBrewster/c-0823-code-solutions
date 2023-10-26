import express from 'express';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';
import pg from 'pg';

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.post('/api/grades', async (req, res, next) => {
  const { name, course, score } = req.body;

  if (
    !name ||
    !course ||
    typeof score !== 'number' ||
    score < 0 ||
    score > 100
  ) {
    return next(
      new ClientError(
        400,
        'Invalid grade. Ensure name, course are provided and score is between 0 and 100.'
      )
    );
  }

  const sql = `
    INSERT INTO "grades" ("name", "course", "score")
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const params = [name, course, score];

  try {
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(new ClientError(500, 'Database query failed.'));
  }
});

app.get('/api/grades', async (req, res, next) => {
  const sql = `
    SELECT *
    FROM "grades"
    `;

  try {
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(new ClientError(500, 'Database query failed.'));
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  const gradeId = +req.params.gradeId;
  const sql = `
    SELECT *
      FROM "grades"
      WHERE "gradeId" = $1
      `;
  const params = [gradeId];

  try {
    const result = await db.query(sql, params);

    if (result.rows.length === 0) {
      return next(new ClientError(404, 'Grade not found.'));
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(new ClientError(500, 'Database query failed.'));
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  const gradeId = +req.params.gradeId;
  const { name, course, score } = req.body;

  if (
    !name ||
    !course ||
    typeof score !== 'number' ||
    score < 0 ||
    score > 100
  ) {
    return next(new ClientError(400, 'Invalid grade data provided.'));
  }

  const sql = `
    UPDATE "grades"
      SET "name" = $1, "course" = $2, "score" = $3
      WHERE "gradeId" = $4
      RETURNING *
     `;
  const params = [name, course, score, gradeId];

  try {
    const result = await db.query(sql, params);

    if (result.rows.length === 0) {
      return next(new ClientError(404, 'Grade not found.'));
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(new ClientError(500, 'Database query failed.'));
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  const gradeId = +req.params.gradeId;

  const sql = `
    DELETE
      FROM "grades"
      WHERE "gradeId" = $1
      RETURNING *
      `;
  const params = [gradeId];

  try {
    const result = await db.query(sql, params);

    if (result.rows.length === 0) {
      return next(new ClientError(404, 'Grade not found.'));
    }

    res.status(204).end();
  } catch (err) {
    next(new ClientError(500, 'Database query failed.'));
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
