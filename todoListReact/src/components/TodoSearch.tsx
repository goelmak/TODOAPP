import "../App.css";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";

const TodoSearch = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <TodoForm />
        <TodoFilter />
      </div>
      <hr className="hr3" />
    </>
  );
};
export default TodoSearch;
