import Header from "./Header";
import { Init } from "./Init";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";

function App() {
  return (
    <>
      <Init></Init>
      <Header></Header>
      <TodoSearch></TodoSearch>
      <TodoList></TodoList>
    </>
  );
}

export default App;
