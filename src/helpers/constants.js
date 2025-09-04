export const MESSAGES = {
  ERRORS: {
    MISSING_FIELDS: 'All fields are required',
    ALREADY_EXIST: 'User with this email already exists',
    NOT_EXIST_USER: 'User does not exist',
    INVALID_CREDENTIALS: 'Invalid credentials',
    INTERNAL_ERROR: 'Internal Server Error',
  },
  AUTH: {
    SUCCESS_LOGIN: 'SUCCESS LOGIN',
    SUCCESS_SIGNUP: 'SUCCESS SIGNUP',
  },
  VALIDATION: {
    INVALID_EMAIL: 'You must enter a valid Email',
    PASSWORD_LENGTH: 'Password must be at least 6 characters',
    USERNAME_LENGTH: 'Username must be at least 3 characters',
    ADDRESS_REQUIRED: 'Address must be a non-empty array',
    PHONE_LENGTH: 'Phone must be at least 10 characters',
  },
  TOKEN: {
    TOKEN_EXPIRED: 'Token has expired',
    TOKEN_INVALID: 'Token is invalid',
    TOKEN_MISSING: 'Authentication token is missing',
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
