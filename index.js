import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.status(200).send('<h1>Welcome to the Food Ordering API</h1>');
});

export default app;