import { atom } from "recoil";
import { todoItemType } from "../types";

export const todoListState = atom<todoItemType[]>({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom<String>({
  key: "TodoListFilter",
  default: "Show All",
});
