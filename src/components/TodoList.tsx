// TodoList.tsx

import React from "react";
import TodoItem from "./TodoItem";
import Todo from "./Todo";

interface TodoListProps {
  showTodoList: boolean;
  todoList: Todo[];
  completedList: Todo[];
  onToggleCompleted: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (todo: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  showTodoList,
  todoList,
  completedList,
  onToggleCompleted,
  onDeleteTodo,
  onEditTodo,
}) => {
  return (
    <div className="todo-container">
      {showTodoList ? (
        <div className="todo-list">
          <h2>Todo</h2>
          <ul>
            {todoList.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleCompleted={onToggleCompleted}
                onDeleteTodo={onDeleteTodo}
                onEditTodo={onEditTodo}
                showEditButton={true}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="completed-list">
          <h2>Completed</h2>
          <ul>
            {completedList.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleCompleted={onToggleCompleted}
                onDeleteTodo={onDeleteTodo}
                onEditTodo={onEditTodo}
                showEditButton={false}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
