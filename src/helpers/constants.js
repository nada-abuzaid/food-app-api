export const MESSAGES = {
  ERRORS: {
    MISSING_FIELDS: 'All fields are required',
    ALREADY_EXIST: 'User with this email already exists',
    NOT_EXIST_USER: 'User does not exist',
    INVALID_CREDENTIALS: 'Invalid credentials',
    INTERNAL_ERROR: 'Internal Server Error',
    TOKEN_EXPIRED: 'Token has expired',
    TOKEN_INVALID: 'Token is invalid',
    TOKEN_MISSING: 'Authentication token is missing'
  },
  AUTH: {
    SUCCESS_LOGIN: 'SUCCESS LOGIN',
    SUCCESS_SIGNUP: 'SUCCESS SIGNUP',
  },
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  REDIRECT: 302,
};
