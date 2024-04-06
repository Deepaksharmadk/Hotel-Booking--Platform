import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
mongoose.connect(process.env.MONGO_URL as string).then(() => {
  console.log("database connected");
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/api/test", async (req: Request, res: Response) => {
  res.json({
    message: "hello world",
  });
});
app.listen(5000, () => {
  console.log("server running on port 5000");
});
