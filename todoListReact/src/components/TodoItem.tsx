import deleteIcon from "../assets/DeleteIcon.svg";
import "../App.css";
import React from "react";

const TodoItem: React.FC<{
  value: string;
  isComplete: boolean;
  onUpdate: (text?: string, isComplete?: boolean) => void;
  onDelete: () => void;
}> = ({ value, isComplete, onUpdate, onDelete }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={isComplete}
        onChange={(e) => onUpdate(undefined, e.target.checked)}
      ></input>
      <input
        className="task-content"
        style={{
          textDecoration: isComplete ? "line-through" : "none",
        }}
        onChange={(e) => onUpdate(e.target.value, undefined)}
        value={value}
      ></input>
      <img src={deleteIcon} alt="Delete" onClick={() => onDelete()} />
    </div>
  );
};

export default TodoItem;
