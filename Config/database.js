const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://Akua-Konadu:6iiyzqtDvjYWxNlR@portfoliowebsite.9udwuhy.mongodb.net/?retryWrites=true&w=majority&appName=portfoliowebsite", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Other options can be added here if needed
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`MongoDB Connection Error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
