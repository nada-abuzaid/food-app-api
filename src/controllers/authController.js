import bcrypt from 'bcryptjs';
import { HTTP_STATUS, MESSAGES, signToken } from '../helpers/index.js';
import { User } from '../models/userModels.js';
import { CustomError } from '../middleware/customError.js';

/**
 * Register a new user
 *
 * @param {Request} request - Express request object containing body with user data
 * @param {Response} response - Express response object
 * @param {NextFunction} next - Express next middleware function
 * @returns {Promise<void>} Sends JSON response with created user or passes error to next()
 *
 * @throws {CustomError} If required fields are missing or email already exists
 */
export const registerController = async (request, response, next) => {
  try {
    const { username, email, password, address, phone } = request.body;

    if (!username || !email || !password || !address || !phone) {
      throw new CustomError(
        MESSAGES.ERRORS.MISSING_FIELDS,
        HTTP_STATUS.BAD_REQUEST
      );
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw new CustomError(
        MESSAGES.ERRORS.ALREADY_EXIST,
        HTTP_STATUS.CONFLICT
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      address,
      phone,
    });
    const { password: userPassword, ...userData } = user.toObject();

    const token = await signToken({ id: user._id, role: user.role });
    response
      .status(HTTP_STATUS.CREATED)
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
      })
      .json({
        success: true,
        message: MESSAGES.AUTH.SUCCESS_SIGNUP,
        data: userData,
      });
  } catch (error) {
    console.log(`Error in register API: ${error}`.bgRed);
    next(error);
  }
};

/**
 * Login an existing user
 *
 * @param {Request} request - Express request object containing body with email and password
 * @param {Response} response - Express response object
 * @param {NextFunction} next - Express next middleware function
 * @returns {Promise<void>} Sends JSON response with user data and token or passes error to next()
 *
 * @throws {CustomError} If required fields are missing, user does not exist, or credentials are invalid
 */
export const loginController = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      throw new CustomError(
        MESSAGES.ERRORS.MISSING_FIELDS,
        HTTP_STATUS.BAD_REQUEST
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new CustomError(
        MESSAGES.ERRORS.NOT_EXIST_USER,
        HTTP_STATUS.NOT_FOUND
      );
    }
    const { password: userPassword, ...userData } = user.toObject();

    const isMatch = await bcrypt.compare(password, userPassword);
    if (!isMatch) {
      throw new CustomError(
        MESSAGES.ERRORS.INVALID_CREDENTIALS,
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    const token = await signToken({ id: user._id, role: user.role });
    response
      .status(HTTP_STATUS.OK)
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
      })
      .json({
        success: true,
        message: MESSAGES.AUTH.SUCCESS_LOGIN,
        data: userData,
      });
  } catch (error) {
    console.log(`Error in login API: ${error}`.bgRed);
    next(error);
  }
};
