import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import { router } from './routes/index.js';
import { connectdb } from './config/db.js';

config();
connectdb();

export const app = express();
app.use([cors(), json(), morgan('dev')]);

app.use(router);