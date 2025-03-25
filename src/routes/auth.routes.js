import express from "express";
import controllerAuth from "../controllers/auth.controller.js";
import authRequired from "../middlewares/validateToken.js";
import validateSchema from "../middlewares/validator.middleware.js";
import authSchema from "../schemas/auth.schema.js";

const router = express.Router();
router.post(
  "/register",
  validateSchema(authSchema.registerSchema),
  controllerAuth.register
);
router.post(
  "/login",
  validateSchema(authSchema.loginSchema),
  controllerAuth.login
);
router.post("/logout", controllerAuth.logout);
router.get("/profile", authRequired, controllerAuth.profile);
export default router;
