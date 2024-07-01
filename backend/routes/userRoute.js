import express from "express";
import signupUser from "../controllers/signupUser.js";
import { loginUser } from "../controllers/loginUser.js";
const router = express.Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

export default router;
