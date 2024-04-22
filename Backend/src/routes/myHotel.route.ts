import express, { Request, Response } from "express";
import { hotelValidation } from "../uttlis/validator";
import {
  myHotel,
  getHotels,
  getHotelsById,
  updateById,
} from "../controller/myhotel.controller";
import verifyToken from "../middleare/auth";
import { upload } from "../uttlis/multer";
const router = express.Router();
router
  .route("/")
  .post(verifyToken, hotelValidation, upload.array("imageFiles", 6), myHotel);
router.route("/").get(verifyToken, getHotels);
router.route("/:id").get(verifyToken, getHotelsById);
router
  .route("/:hotelId")
  .put(verifyToken, upload.array("imageFiles"), updateById);
export default router;
