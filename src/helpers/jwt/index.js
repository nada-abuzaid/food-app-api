import pkg from 'jsonwebtoken';
const { sign } = pkg;

export const signToken = (payload) => {
  return new Promise((resolve, reject) => {
    sign(payload, process.env.SECRET_KEY, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
};