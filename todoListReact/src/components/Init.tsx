import { useSetRecoilState } from "recoil";
import { todoListState } from "../store/atoms";
import { useEffect } from "react";
import fetchTodos from "../services/fetchTodos";
import { todoItemType, todoItemTypeBackend } from "../types";

export const Init = () => {
  const setTodoList = useSetRecoilState(todoListState);
  useEffect(() => {
    const setData = async () => {
      try {
        const data: todoItemTypeBackend[] = await fetchTodos();
        const modifiedData: todoItemType[] = data.map(
          ({ _id, ...rest }) => rest
        );
        console.log(modifiedData);
        setTodoList(modifiedData);
      } catch (error) {
        console.error("error fetching todos:", error);
      }
    };
    setData();
  }, []);
  return <></>;
};
