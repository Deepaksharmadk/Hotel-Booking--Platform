import express from "express";
import verifyToken from "../middleare/auth";
import { registerValidation, LoginValidation } from "../uttlis/validator";
import { Login, Register, verifyUser } from "../controller/user.controller";
const router = express.Router();
router.route("/register").post(registerValidation, Register);
router.route("/login").post(LoginValidation, Login);
router.route("/validate-token").get(verifyToken, verifyUser);

export default router;
