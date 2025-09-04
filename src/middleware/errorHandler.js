export const errorHandler = (error, _request, response, _next) => {
  const statusCode = error.status || 500;
  const message = error.message || 'Internal Server Error';

  response.status(statusCode).json({
    success: false,
    message,
  });
};