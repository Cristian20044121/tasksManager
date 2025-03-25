import express from "express";
import controllerAuth from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/register", controllerAuth.register);
router.post("/login", controllerAuth.login);
router.post("/logout", controllerAuth.logout);
export default router;
