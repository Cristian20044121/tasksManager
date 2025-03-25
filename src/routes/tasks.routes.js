import express from "express";
import authRequired from "../middlewares/validateToken.js";
import tasksController from "../controllers/tasks.controller.js";

const router = express.Router();

router.get("/tasks", authRequired, tasksController.getTasks);
router.get("/tasks/:id", authRequired, tasksController.getTask);
router.post("/tasks", authRequired, tasksController.createTask);
router.put("/tasks/:id", authRequired, tasksController.updateTask);
router.delete("/tasks/:id", authRequired, tasksController.deleteTask);

export default router;
