import express from "express";
import validator from "../uttlis/validator";
import { Register } from "../controller/user.controller";
const router = express.Router();
router.route("/register").post(validator, Register);

export default router;
