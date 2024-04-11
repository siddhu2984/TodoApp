// App.tsx

import React, { useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ToggleListButton from "./components/ToggleListButton";
import Todo from "./components/Todo";


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [updatedTodoTitle, setUpdatedTodoTitle] = useState<string>("");
  const [showTodoList, setShowTodoList] = useState<boolean>(true); // State to manage which list to show

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (todo: Todo) => {
    setEditTodo(todo);
    setUpdatedTodoTitle(todo.title);
  };

  const handleUpdateTodo = () => {
    if (editTodo && updatedTodoTitle.trim() !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === editTodo.id ? { ...todo, title: updatedTodoTitle } : todo
        )
      );
      setEditTodo(null);
      setUpdatedTodoTitle("");
    }
  };

  const handleToggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const todoList = todos.filter((todo) => !todo.completed);
  const completedList = todos.filter((todo) => todo.completed);

  const handleToggleList = () => {
    setShowTodoList((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm
        onAddTodo={handleAddTodo}
        editTodo={editTodo}
        onUpdateTodo={handleUpdateTodo}
        updatedTodoTitle={updatedTodoTitle}
        setUpdatedTodoTitle={setUpdatedTodoTitle}
      />
      <ToggleListButton
        showTodoList={showTodoList}
        onToggleList={handleToggleList}
      />
      <TodoList
        showTodoList={showTodoList}
        todoList={todoList}
        completedList={completedList}
        onToggleCompleted={handleToggleCompleted}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default App;
