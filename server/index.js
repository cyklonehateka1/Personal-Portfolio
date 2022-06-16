import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection successfull");
  } catch (err) {
    console.log(err);
  }
};

app.use(express.json());

app.use("/", authRoute);

app.listen(process.env.PORT, () => {
  connection();
  console.log(`Backend server running on ${process.env.PORT}`);
});
