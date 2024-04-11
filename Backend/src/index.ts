import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import path from "path";
mongoose.connect(process.env.MONGO_URL as string).then(() => {
  console.log("database connected");
});
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.static(path.join(__dirname, "../../frontend/dist")));
import authRoutes from "./routes/user.route";
app.use("/", (req: Request, res: Response) => {
  res.send("hello");
});
app.use("/api/auth", authRoutes);
app.listen(5000, () => {
  console.log("server running on port 5000");
});
