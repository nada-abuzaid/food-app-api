import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import { router } from './routes/index.js';
import { connectdb } from './config/db.js';

config();
connectdb();

export const app = express();

app.set('port', process.env.PORT || 3000);
app.use([
  cors(),
  express.json(),
  express.urlencoded({ extended: false }),
  morgan('dev'),
]);

app.use('/api/v1', router);
