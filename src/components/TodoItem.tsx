import React from "react";
import Todo from "./Todo";

interface TodoItemProps {
  todo: Todo;
  onToggleCompleted: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (todo: Todo) => void;
  showEditButton: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleCompleted,
  onDeleteTodo,
  onEditTodo,
  showEditButton,
}) => {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompleted(todo.id)}
      />
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => onEditTodo(todo)}
      >
        {todo.title}
      </span>
      <div>
        {showEditButton && (
          <button onClick={() => onEditTodo(todo)}>Edit</button>
        )}
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
