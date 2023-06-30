const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successful connection to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error :', error);
  }
};

module.exports = connectToMongoDB;
