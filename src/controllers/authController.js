import bcrypt from 'bcryptjs';
import { signToken } from '../helpers/index.js';
import { User } from '../models/userModels.js';

export const registerController = async (request, response) => {
  try {
    const { username, email, password, address, phone } = request.body;

    if (!username || !email || !password || !address || !phone) {
      return response.status(500).send({
        success: false,
        message: 'Please provide all fields!',
      });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return response.status(406).send({
        success: false,
        message: 'Email already exist, please login instead!',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      address,
      phone,
    });

    const token = await signToken({ username, email, password, address, phone });
    response.status(201).cookie('token', token).json({
      success: true,
      message: 'User registered successfully!',
      data: user,
    });
  } catch (error) {
    console.log(`Error in register API: ${error}`.bgRed);
    response.status(500).json({
      success: false,
      message: 'Error in register API!',
      error,
    });
  }
};

export const loginController = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(500).send({
        success: false,
        message: 'Please provide all fields!',
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(404).send({
        success: false,
        message: 'User not found!',
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return response.status(500).json({
        success: false,
        message: "Invalid credentials!"
      })
    }

    const { username, address, phone } = user;
    const token = await signToken({ username, email, address, phone, password });
    response.status(200).cookie('token', token).json({
      success: true,
      message: 'User login successfully!',
      data: user,
    });
  } catch (error) {
    console.log(`Error in login API: ${error}`.bgRed);
    response.status(500).json({
      success: false,
      message: 'Error in login API!',
      error,
    });
  }
};
