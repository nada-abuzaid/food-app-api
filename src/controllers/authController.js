import { User } from '../models/userModels.js';

export const registerController = async (req, res) => {
  try {
    const { username, email, password, address, phone } = req.body;

    if (!username || !email || !password || !address || !phone) {
      return res.status(500).send({
        success: false,
        message: 'Please provide all fields!',
      });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(500).send({
        success: false,
        message: 'Email already exist, please login instead!',
      });
    }

    const user = await User.create({
      username,
      email,
      password,
      address,
      phone,
    });

    res
      .status(200)
      .json({ success: true, message: 'User registered successfully!' });
  } catch (error) {
    console.log(`Error in register API: ${error}`.bgRed);
    res.status(500).json({
      success: false,
      message: 'Error in register API!',
      error,
    });
  }
};
