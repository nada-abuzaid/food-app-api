import { body } from 'express-validator';
import { MESSAGES } from '../helpers/constants.js';

export const loginValidation = [
  body('email')
    .exists({ checkFalsy: true })
    .withMessage(MESSAGES.VALIDATION.EMAIL_REQUIRED)
    .isEmail()
    .withMessage(MESSAGES.VALIDATION.INVALID_EMAIL),
  body('password')
    .exists({ checkFalsy: true })
    .withMessage(MESSAGES.VALIDATION.PASSWORD_REQUIRED)
    .isLength({ min: 6 })
    .withMessage(MESSAGES.VALIDATION.PASSWORD_LENGTH),
];

export const registerValidation = [
  body('username')
    .exists({ checkFalsy: true })
    .withMessage(MESSAGES.VALIDATION.USERNAME_REQUIRED)
    .trim()
    .isString()
    .withMessage(MESSAGES.VALIDATION.USERNAME_STRING)
    .isLength({ min: 3 })
    .withMessage(MESSAGES.VALIDATION.USERNAME_LENGTH),

  body('email')
    .exists({ checkFalsy: true })
    .withMessage(MESSAGES.VALIDATION.EMAIL_REQUIRED)
    .trim()
    .isEmail()
    .withMessage(MESSAGES.VALIDATION.INVALID_EMAIL),

  body('password')
    .exists({ checkFalsy: true })
    .withMessage(MESSAGES.VALIDATION.PASSWORD_REQUIRED)
    .trim()
    .isLength({ min: 6 })
    .withMessage(MESSAGES.VALIDATION.PASSWORD_LENGTH),

  body('address')
    .exists({ checkFalsy: true })
    .withMessage(MESSAGES.VALIDATION.ADDRESS_REQUIRED)
    .isArray({ min: 1 })
    .withMessage(MESSAGES.VALIDATION.ADDRESS_REQUIRED),

  body('phone')
    .exists({ checkFalsy: true })
    .withMessage(MESSAGES.VALIDATION.PHONE_REQUIRED)
    .trim()
    .isString()
    .withMessage(MESSAGES.VALIDATION.PHONE_STRING)
    .isLength({ min: 10 })
    .withMessage(MESSAGES.VALIDATION.PHONE_LENGTH),
];