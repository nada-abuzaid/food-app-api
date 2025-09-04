import bcrypt from 'bcryptjs';
import { signToken } from '../helpers/index.js';
import { User } from '../models/userModels.js';

export const registerController = async (request, response) => {
  try {
    const { username, email, password, address, phone } = request.body;

    if (!username || !email || !password || !address || !phone) {
      throw new CustomError('All fields are required', 400);
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw new CustomError('Email already exists, please login instead', 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const { password: userPassword, ...user } = await User.create({
      username,
      email,
      password: hashedPassword,
      address,
      phone,
    });

    const token = await signToken({ id: user._id, role: user.role });
    response
      .status(201)
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
      })
      .json({
        success: true,
        message: 'User registered successfully!',
        data: user,
      });
  } catch (error) {
    console.log(`Error in register API: ${error}`.bgRed);
    next(error);
  }
};

export const loginController = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      throw new CustomError('Email and password are required', 400);
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new CustomError('User not found', 404);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new CustomError('Invalid credentials', 401);
    }

    const token = await signToken({ id: user._id, role: user.role });
    response
      .status(200)
      .cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
      })
      .json({
        success: true,
        message: 'User login successfully!',
        data: user,
      });
  } catch (error) {
    console.log(`Error in login API: ${error}`.bgRed);
    next(error)
  }
};
