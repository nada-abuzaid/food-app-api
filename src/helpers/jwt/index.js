import pkg, { verify } from 'jsonwebtoken';
const { sign } = pkg;

const { SECRET_KEY } = process.env;
export const signToken = (payload) => {
  return new Promise((resolve, reject) => {
    sign(payload, SECRET_KEY, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
};

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    verify(token, SECRET_KEY, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });
};
