import { validationResult } from 'express-validator';
import { CustomError } from './customError.js';
import { HTTP_STATUS } from '../helpers/constants.js';

/**
 * Middleware to validate request fields using express-validator
 * @param {Array} validations - Array of validation chains
 * @returns {Function} Express middleware
 */
export const validateRequest = (validations) => async (request, _response, next) => {
  await Promise.all(validations.map((validation) => validation.run(request)));

  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    const message = errors.array().map((err) => err.msg).join(', ');
    return next(new CustomError(message, HTTP_STATUS.BAD_REQUEST));
  }

  next();
};
