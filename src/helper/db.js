import mongoose from "mongoose";

const config = {
  isConnected: 0,
};

export const connectDB = async () => {
  if (config.isConnected) {
    return;
  }
  try {
    const { connection } = await mongoose.connect(process.env.DB_URL);
    console.log("DB CONNECTED");
    console.log(connection.readyState);
    config.isConnected = connection.readyState;
  } catch (error) {
    console.log("Failed to connect database", error);
  }
};
