import express, { Request, Response } from "express";
import { hotelValidation } from "../uttlis/validator";
import { myHotel } from "../controller/myhotel.controller";
import verifyToken from "../middlwares/auth";
import { upload } from "../uttlis/multer";
const router = express.Router();
router
  .route("/")
  .post(verifyToken, hotelValidation, upload.array("imageFiles", 6), myHotel);
export default router;
