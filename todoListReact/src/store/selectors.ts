import { selector } from "recoil";
import { todoListFilterState, todoListState } from "./atoms";

export const filteredTodoListState = selector({
  key: "FilteredTodoListState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const todoListFilter = get(todoListFilterState);
    switch (todoListFilter) {
      case "Show Completed":
        return todoList.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return todoList.filter((item) => !item.isComplete);
      default:
        return todoList;
    }
  },
});

export const todoListStatState = selector({
  key: "TodoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : Math.round((totalCompletedNum / totalNum) * 100);

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
