import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo.controller";

const router = express.Router();

router.get("/todo/get", getTodos);
router.post("/todo/create", createTodo);
router.put("/todo/update", updateTodo);
router.delete("/todo/delete", deleteTodo);

export default router;
