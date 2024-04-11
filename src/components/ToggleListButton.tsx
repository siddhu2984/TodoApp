import React from "react";

interface ToggleListButtonProps {
  showTodoList: boolean;
  onToggleList: () => void;
}

const ToggleListButton: React.FC<ToggleListButtonProps> = ({
  showTodoList,
  onToggleList,
}) => {
  return (
    <div className="slider">
      <button onClick={onToggleList}>
        {showTodoList ? "Show Completed" : "Show Todo"}
      </button>
    </div>
  );
};

export default ToggleListButton;
