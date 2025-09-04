export const clientError = (_request, response, _next) => {
  response.status(404).json({
    success: false,
    message: 'Page Not Found',
  });
};