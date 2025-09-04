import { verifyToken } from '../helpers/index.js';

export const checkAuth = async (request, _response, next) => {
  try {
    const token = request.headers.cookie.slice(6, request.headers.cookie.length);
    if (!token) {
      next(new CustomError(401, 'Forbidden'));
      return;
    }
    const userPayload = await verifyToken(token);
    request.userData = userPayload;
    next();
  } catch (error) {
    next(Error(498, 'Invalid token'));
  }
};
