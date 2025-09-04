import { body } from 'express-validator';
import { MESSAGES } from '../helpers/constants.js';

export const loginValidation = [
  body('email').isEmail().withMessage(MESSAGES.VALIDATION.INVALID_EMAIL),
  body('password')
    .isLength({ min: 6 })
    .withMessage(MESSAGES.VALIDATION.PASSWORD_LENGTH),
];

export const registerValidation = [
  body('username')
    .trim()
    .isString()
    .isLength({ min: 3 })
    .withMessage(MESSAGES.VALIDATION.USERNAME_LENGTH),
  body('email').trim().isEmail().withMessage(MESSAGES.VALIDATION.INVALID_EMAIL),
  body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage(MESSAGES.VALIDATION.PASSWORD_LENGTH),
  body('address')
    .trim()
    .isArray({ min: 1 })
    .withMessage(MESSAGES.VALIDATION.ADDRESS_REQUIRED),
  body('phone')
    .trim()
    .isString()
    .isLength({ min: 10 })
    .withMessage(MESSAGES.VALIDATION.PHONE_LENGTH),
];
