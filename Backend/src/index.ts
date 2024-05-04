import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,

  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
console.log(process.env.CLOUDINARY_NAME);
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
console.log(process.env.FRONTEND_URL);

import authRoutes from "./routes/auth.route";
import myHotelRoutes from "./routes/myHotel.route";
import userRoutes from "./routes/user.route";

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
