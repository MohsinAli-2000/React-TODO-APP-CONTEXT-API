import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "ToDo msg",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
