import { todoItemType } from "../types";

const addTodo = async (todo: todoItemType) => {
  try {
    const response = await fetch("http://localhost:3000/api/todo/create", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export default addTodo;
