import { Router } from 'express';
import {testController} from '../controllers/index.js';

export const router = Router();

router.get('/', testController);