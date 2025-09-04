import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

export const signToken = (payload) => {
  const { SECRET_KEY } = process.env;
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
  const { SECRET_KEY } = process.env;
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
