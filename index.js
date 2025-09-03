import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (_req, res) => {
  return res.status(200).send('<h1>Welcome to the Food Ordering API</h1>');
});

export default app;