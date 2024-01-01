import mongoose from "mongoose";

const mongo_url = process.env.MONGO_URL || "";

export const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(mongo_url);
    console.log("connected to mongo db");
  } catch (error) {
    const msg = (error as Error).message;
    console.error("error connecting to mongodb", msg);
    process.exit(1);
  }
};

export const disconnectDb = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log("db disconnected");
  } catch (error) {
    console.error("error in disconnecting db", error);
  }
};
