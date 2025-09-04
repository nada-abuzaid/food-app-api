import { HTTP_STATUS, MESSAGES, verifyToken } from '../helpers/index.js';
import { CustomError } from './customError.js';

export const checkAuth = async (request, _response, next) => {
  try {
    const cookieHeader = request.headers.cookie || '';
    const token = cookieHeader
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];

    if (!token) {
      next(new CustomError(MESSAGES.TOKEN.TOKEN_MISSING, HTTP_STATUS.UNAUTHORIZED));
      return;
    }
    
    const userPayload = await verifyToken(token);
    request.userData = userPayload;
    next();
  } catch (error) {
    if (error.message === MESSAGES.TOKEN.TOKEN_EXPIRED) {
      next(
        new CustomError(MESSAGES.TOKEN.TOKEN_EXPIRED, HTTP_STATUS.UNAUTHORIZED)
      );
    } else {
      next(
        new CustomError(MESSAGES.TOKEN.TOKEN_INVALID, HTTP_STATUS.UNAUTHORIZED)
      );
    }
  }
};
