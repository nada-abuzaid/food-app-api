import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  address: {
    type: Array,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  role: {
    type: String,
    enum: ['client', 'admin', 'vendor', 'driver'],
    required: [true, 'Role is required'],
    default: 'client',
  },
  profile:{
    type: String,
    required: [true, 'Profile is required'],
    default: 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1696229266/default_profile_oqtq9r.png',
  }
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);