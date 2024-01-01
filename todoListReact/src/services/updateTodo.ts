import { todoItemType } from "../types";

export const updateTodo = async (todo: todoItemType) => {
  try {
    const response = await fetch("http://localhost:3000/api/todo/update", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
      method: "PUT",
    });
    if (!response.ok) {
      throw new Error(`http error is coming : ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
