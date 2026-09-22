const mongoose = require("mongoose");

async function connectDB() {
  try {
    // URI database masih ditulis langsung dulu di artikel ini.
    // Di artikel berikutnya kita akan pindahkan ke file .env agar lebih aman.
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined in .env file");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;