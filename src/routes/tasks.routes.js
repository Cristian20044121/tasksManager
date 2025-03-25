import express from "express";
import authRequired from "../middlewares/validateToken.js";
import tasksController from "../controllers/tasks.controller.js";
import validateSchema from "../middlewares/validator.middleware.js";
import tasksSchemas from "../schemas/tasks.schemas.js";

const router = express.Router();

router.get("/tasks", authRequired, tasksController.getTasks);
router.get("/tasks/:id", authRequired, tasksController.getTask);
router.post(
  "/tasks",
  authRequired,
  validateSchema(tasksSchemas.createTask),
  tasksController.createTask
);
router.put(
  "/tasks/:id",
  authRequired,
  validateSchema(tasksSchemas.updateTask),
  tasksController.updateTask
);
router.delete("/tasks/:id", authRequired, tasksController.deleteTask);

export default router;
