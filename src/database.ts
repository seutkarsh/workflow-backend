import mongoose from 'mongoose';
import config from './config';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoDB.uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if connection fails
  }
};
