import { useState } from "react";
import { useTodoContext } from "../provider/TodoProvider";

const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [todo, setTodo] = useState("");
  const generatedNumber = () =>  Math.floor(Math.random() * 100000);
  const submit = (e) => {
    e.preventDefault();
    if(todo.length === 0) return;
    addTodo({ title: todo, checked: false, id: generatedNumber() });
    setTodo('')
  };

  return (<form onSubmit={submit} className="todo-form">
    <input className="todo-input" placeholder="Add a new TODO" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button className="todo-button" type="submit">New Todo</button>
  </form>)
};

export default TodoForm;