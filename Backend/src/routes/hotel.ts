import express from "express";
const router = express.Router();
router.route("/search").get(hotelSearch);
export default router;
