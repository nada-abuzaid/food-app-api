import mongoose from 'mongoose';
import colors from 'colors';

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected successfully ${mongoose.connection.host}`.bgGreen);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`.bgRed);
  }
};