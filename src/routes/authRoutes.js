import { Router } from 'express';
import { registerController, loginController } from '../controllers/index.js';
import { validateRequest } from '../middleware/validateRequest.js';
import { loginValidation, registerValidation } from '../validations/authValidation.js';

export const authRouter = Router();

authRouter.post('/register', validateRequest(registerValidation), registerController);
authRouter.post('/login', validateRequest(loginValidation),loginController);