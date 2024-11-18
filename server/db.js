const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

async function connectDB() {
  try {
    // Check if the connection is already established
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return mongoose.connection;
    }

    // Connect to MongoDB using Mongoose
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
