import { useState } from "react";
import { useTodoContext } from "../provider/TodoProvider";
const TodoList = () => {
  const { todoList, getTodoListCount, toggleTodo, removeTodo } = useTodoContext();

  return (
    <div className="todo-list">
      {getTodoListCount === 0 ? <div className="todo-empty"></div> : ""}
      {todoList.map((todo) => (
        <div
          className={`todo-item` +( todo.checked  ? ' is-completed': '') }
          key={todo.id}
        >
          <input
            onChange={(e) => toggleTodo(todo)}
            className="todo-status"
            type="checkbox"
            checked={todo.checked}
          />

          <span className="todo-name">{todo?.title ?? "Random text"}</span>
          <div onClick={() => removeTodo(todo)} className="todo-delete"></div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
