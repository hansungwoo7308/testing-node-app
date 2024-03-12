const mongoose = require("mongoose");

async function connectDB() {
  // console.log({ connections: mongoose.connections });
  if (mongoose.connections[0].readyState) {
    // console.log("\n\x1b[33mMongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // console.log("\n\x1b[33mMongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
