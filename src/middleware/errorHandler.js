import { HTTP_STATUS, MESSAGES } from '../helpers/index.js';

export const errorHandler = (error, _request, response, _next) => {
  const statusCode = error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = error.message || MESSAGES.ERRORS.INTERNAL_ERROR;

  response.status(statusCode).json({
    success: false,
    message,
  });
};