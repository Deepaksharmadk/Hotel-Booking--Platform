import express from "express";
import verifyToken from "../middlwares/auth";
import { LoginValidation } from "../uttlis/validator";
import { Login, verifyUser, logOut } from "../controller/user.controller";

const router = express.Router();

router.route("/login").post(LoginValidation, Login);
router.route("/validate-token").get(verifyToken, verifyUser);
router.route("/logout").post(logOut);

export default router;
