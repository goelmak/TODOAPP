import { Request, Response } from "express";
import { Todo } from "../models/todo.model";

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, text, isComplete } = req.body;
    console.log("body", req.body);
    const newTodo = new Todo({ id, text, isComplete });
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.body;
    const todo = await Todo.findOneAndDelete({ id });
    if (!todo) {
      res.status(404).send(`todo with given id ${id} is not found`);
      return;
    }
    res.status(200).send("Todo Deleted Successfully");
  } catch (error) {
    res.status(500).json({ error: `Error deleting todo: ${error}` });
    return;
  }
};

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todo = req.body;
    console.log("todo", todo);
    const updatedTodo = await Todo.findOneAndUpdate({ id: todo.id }, todo);
    if (!updatedTodo) {
      res.status(404).send(`todo of given id : ${todo._id} is not found`);
      return;
    }
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
