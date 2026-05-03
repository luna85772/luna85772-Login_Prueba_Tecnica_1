import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.DB_CONNECTION_STRINGS;
  if (!uri) {
    console.error("Missing MongoDB connection string: DB_CONNECTION_STRINGS is undefined.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;