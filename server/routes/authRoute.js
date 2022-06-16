import express from "express";
import { adminRegister } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/register", adminRegister);

export default router;
