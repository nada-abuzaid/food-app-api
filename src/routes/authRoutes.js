import { Router } from 'express';
import { registerController } from '../controllers/index.js';

export const authRouter = Router();

authRouter.post('/register', registerController);