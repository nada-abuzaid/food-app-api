import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use([
    cors(),
    express.json(),
    morgan('dev')
])

app.get('/', (_req, res) => {
  return res.status(200).send('<h1>Welcome to the Food Ordering API</h1>');
});

export default app;