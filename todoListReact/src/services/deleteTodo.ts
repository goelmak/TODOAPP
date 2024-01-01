import { todoItemType } from "../types";

export const deleteTodo = async (todo: todoItemType) => {
  try {
    const response = await fetch("http://localhost:3000/api/todo/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};
