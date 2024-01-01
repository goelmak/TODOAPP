import TodoItem from "./TodoItem";
import "../App.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../store/atoms";
import { todoItemType } from "../types";
import { filteredTodoListState } from "../store/selectors";
import { updateTodo } from "../services/updateTodo";
import { deleteTodo } from "../services/deleteTodo";

const TodoList = () => {
  const setList = useSetRecoilState(todoListState);
  const list = useRecoilValue(filteredTodoListState);

  const updateItem = (
    item: todoItemType,
    text?: string,
    isComplete?: boolean
  ) => {
    let newItem: todoItemType = item;
    if (text !== undefined) {
      newItem = { ...item, text };
    }
    if (isComplete !== undefined) {
      newItem = { ...item, isComplete };
    }
    try {
      updateTodo(newItem);
      setList((oldList) =>
        oldList.map((i) => (i.id === newItem.id ? newItem : i))
      );
    } catch (error) {}
  };

  const deleteItem = (item: todoItemType) => {
    try {
      deleteTodo(item);
      setList((oldList) => oldList.filter((i) => i.id !== item.id));
    } catch (error) {
      console.log("sidnsidnfin");
      console.error("deletion error:", error);
    }
  };

  return (
    <div className="taskList">
      {list.map((item) => (
        <TodoItem
          key={item.id}
          value={item.text}
          isComplete={item.isComplete}
          onUpdate={updateItem.bind(null, item)}
          onDelete={deleteItem.bind(null, item)}
        />
      ))}
    </div>
  );
};
export default TodoList;
