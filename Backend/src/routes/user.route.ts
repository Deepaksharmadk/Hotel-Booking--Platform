import express from "express";
import verifyToken from "../middleare/auth";
import { registerValidation, LoginValidation } from "../uttlis/validator";
import {
  Login,
  Register,
  verifyUser,
  logOut,
} from "../controller/user.controller";
const router = express.Router();
router.route("/register").post(registerValidation, Register);
router.route("/login").post(LoginValidation, Login);
router.route("/validate-token").get(verifyToken, verifyUser);
router.route("/logout").post(logOut);

export default router;
