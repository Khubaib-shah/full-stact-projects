import { Router } from "express";
import {
  deleteTodo,
  getTodo,
  saveTodo,
  updateTodo,
} from "../controllers/TodoController.js";
const router = Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.put("/update", updateTodo);
router.delete("/delete", deleteTodo);

export default router;
