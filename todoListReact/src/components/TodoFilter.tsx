import { useSetRecoilState } from "recoil";
import "../App.css";
import { todoListFilterState } from "../store/atoms";

const TodoFilter = () => {
  const setFilterState = useSetRecoilState(todoListFilterState);
  const changeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterState(event.target.value);
  };

  return (
    <select className="form-filter" onChange={changeFilter}>
      <option value="Show All">Show All</option>
      <option value="Show Completed">Show Completed</option>
      <option value="Show Uncompleted">Show Uncompleted</option>
    </select>
  );
};
export default TodoFilter;
