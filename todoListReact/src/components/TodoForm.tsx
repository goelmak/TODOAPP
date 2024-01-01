import { useSetRecoilState } from "recoil";
import "../App.css";
import { todoListState } from "../store/atoms.ts";
import { FormEvent, useState } from "react";
import { todoItemType } from "../types.ts";
import { v4 } from "uuid";
import addTodo from "../services/addTodo.ts";

const TodoForm = () => {
  const setTodoList = useSetRecoilState(todoListState);
  const [input, setInput] = useState("");

  const addItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const todo = { id: v4(), text: input, isComplete: false };
      addTodo(todo);
      setTodoList((oldTodoList: todoItemType[]) => [...oldTodoList, todo]);
      setInput("");
    } catch (err) {}
  };

  return (
    <form className="form-container" onSubmit={addItem}>
      <div>
        <input
          id="text"
          type="text"
          placeholder="Enter your TODO..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};
export default TodoForm;
