import pkg from 'jsonwebtoken';
import { MESSAGES } from '../constants.js';

const { sign, verify } = pkg;

/**
 * Sign a JWT token with payload
 *
 * @param {JwtPayload} payload - The data to include in the JWT (id, role)
 * @returns {Promise<string>} - Resolves to the signed JWT
 * @throws {Error} - If signing fails or SECRET_KEY is not defined
 */
export const signToken = (payload) => {
  const { SECRET_KEY, JWT_EXPIRES } = process.env;
  if (!SECRET_KEY)
    throw new CustomError(
      MESSAGES.ERRORS.INTERNAL_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );

  return new Promise((resolve, reject) => {
    sign(
      payload,
      SECRET_KEY,
      { expiresIn: JWT_EXPIRES || '1h' },
      (error, token) => {
        if (error)
          reject(
            new CustomError(
              MESSAGES.ERRORS.INTERNAL_ERROR,
              HTTP_STATUS.INTERNAL_SERVER_ERROR
            )
          );
        else resolve(token);
      }
    );
  });
};

/**
 * Verify a JWT token and decode its payload
 *
 * @param {string} token - JWT token to verify
 * @returns {Promise<JwtPayload>} - Resolves to decoded payload
 * @throws {Error} - If token is invalid, expired, or SECRET_KEY is missing
 */
export const verifyToken = (token) => {
  const { SECRET_KEY } = process.env;
  if (!SECRET_KEY)
    throw new CustomError(
      MESSAGES.ERRORS.INTERNAL_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    );

  return new Promise((resolve, reject) => {
    verify(token, SECRET_KEY, (error, decoded) => {
      if (error) {
        if (error.name === 'TokenExpiredError') {
          reject(
            new CustomError(
              MESSAGES.TOKEN.TOKEN_EXPIRED,
              HTTP_STATUS.UNAUTHORIZED
            )
          );
        } else {
          reject(
            new CustomError(
              MESSAGES.TOKEN.TOKEN_INVALID,
              HTTP_STATUS.UNAUTHORIZED
            )
          );
        }
      } else resolve(decoded);
    });
  });
};
