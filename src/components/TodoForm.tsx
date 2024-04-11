import React, { useState } from "react";
import Todo from "./Todo";

interface TodoFormProps {
  onAddTodo: (newTodo: Todo) => void;
  editTodo: Todo | null;
  onUpdateTodo: () => void;
  updatedTodoTitle: string;
  setUpdatedTodoTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TodoForm: React.FC<TodoFormProps> = ({
  onAddTodo,
  editTodo,
  onUpdateTodo,
  updatedTodoTitle,
  setUpdatedTodoTitle,
}) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editTodo ? setUpdatedTodoTitle(e.target.value) : setNewTodo(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (editTodo) {
      onUpdateTodo();
    } else {
      if (newTodo.trim() !== "") {
        const todo: Todo = {
          id: Date.now(),
          title: newTodo,
          completed: false,
        };
        onAddTodo(todo);
        setNewTodo("");
      }
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Enter a new todo"
        value={editTodo ? updatedTodoTitle : newTodo}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {!editTodo ? (
        <button onClick={handleAddTodo}>Add</button>
      ) : (
        <div className="update-input">
          <button onClick={onUpdateTodo}>Update</button>
        </div>
      )}
    </div>
  );
};

export default TodoForm;
