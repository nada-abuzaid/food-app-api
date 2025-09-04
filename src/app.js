import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
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
  helmet(),
  cors(),
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    handler: (req, res, next, options) => {
    console.log(`IP ${req.ip} exceed limit.`.bgRed);
    res.status(429).json({
      success: false,
      error: 'Too many requests, please try again later.'
    });
  }
  }),
  express.json(),
  express.urlencoded({ extended: false }),
  morgan('dev'),
]);

app.use('/api/v1', router);
