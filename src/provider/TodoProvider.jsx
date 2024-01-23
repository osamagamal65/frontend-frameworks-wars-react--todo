import { createContext, useState, useContext, useEffect } from "react";
const TodoContext = createContext();

function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
}

function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    
    return initialValue;
  }
}
const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(getLocalStorage('todoList', []));

  useEffect(() => {
    setLocalStorage("todoList", todoList);
  }, [todoList]);

  const getTodoListCount = () => todoList.length;

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (todo) => {
    const newList = [...todoList.filter((x) => x.id != todo.id)];
    setTodoList(newList);
  };

  const toggleTodo = (todo) => {
    const indexOfTodo = todoList.findIndex((x) => x.id == todo.id);
    const newList = [...todoList];
    newList[indexOfTodo].checked = !newList[indexOfTodo].checked;
    setTodoList(newList);
  };
  const contextValue = {
    todoList,
    getTodoListCount,
    addTodo,
    removeTodo,
    toggleTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {" "}
      {children}
    </TodoContext.Provider>
  );
};
export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;
