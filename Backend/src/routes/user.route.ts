import express from "express";
import { registerValidation, LoginValidation } from "../uttlis/validator";
import { Login, Register } from "../controller/user.controller";
const router = express.Router();
router.route("/register").post(registerValidation, Register);
router.route("/login").post(LoginValidation, Login);

export default router;
