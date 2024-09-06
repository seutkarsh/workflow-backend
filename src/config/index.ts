import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  mongoDB: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
  },
};
