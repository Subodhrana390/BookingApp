import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb ! connected on ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error : ", error);
    process.exit(1);
  }
};

export { connectDB };
