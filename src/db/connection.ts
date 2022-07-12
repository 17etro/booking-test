import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const dbURI: any = process.env.DB_URI;
    await mongoose.connect(dbURI);
  } catch (error) {
    console.log(error);
  }
};
