const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Get the connection string from .env
const uri = process.env.MONGO_URI;

// Test the connection
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully');
    mongoose.connection.close(); // Close the connection once successful
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });