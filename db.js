import mongoose from "mongoose";

async function connectDB() {
  try {
    const result = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Conneted Successfully");
  } catch (error) {
    console.log("Databae Error", error);
  }
}

export default connectDB;
