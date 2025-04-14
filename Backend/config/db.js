import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://akashunknow:Blackhammer@cluster0.mbpujgi.mongodb.net/food-del"
    )
    .then(() => {
      console.log("db conected");
    });
};
