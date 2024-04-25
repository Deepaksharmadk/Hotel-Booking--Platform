import express from "express";
import { hotelSearch } from "../controller/hotel.controller";
const router = express.Router();
router.route("/search").get(hotelSearch);
export default router;
