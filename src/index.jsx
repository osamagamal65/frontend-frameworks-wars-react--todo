import React from "react";
import ReactDOM from "react-dom";
import TodoProvider from "./provider/TodoProvider";
import TodoList from "./components/TodoList.jsx";
import "./styles.css";
import TodoForm from "./components/TodoForm.jsx";
import { format } from "date-fns";

function App() {
  return (
    <div className="todo-container">
      <TodoProvider>
        <div className="todo-header">
          <div className="todo-header-title">
            TODAY is {format(new Date(), "eeee dd MMM yyyy").toUpperCase()}
          </div>
        </div>
        <TodoList />
        <TodoForm />
      </TodoProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
