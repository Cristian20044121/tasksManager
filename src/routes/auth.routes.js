import express from "express";
import controllerAuth from "../controllers/auth.controller.js";
import authRequired from "../middlewares/validateToken.js";

const router = express.Router();
router.post("/register", controllerAuth.register);
router.post("/login", controllerAuth.login);
router.post("/logout", controllerAuth.logout);
router.get("/profile", authRequired, controllerAuth.profile);
export default router;
