import express from "express";

import { registerValidation } from "../uttlis/validator";
import { Register } from "../controller/user.controller";

const router = express.Router();
router.route("/register").post(registerValidation, Register);

export default router;
