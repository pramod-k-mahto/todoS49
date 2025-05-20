import { createContext, useReducer } from "react";
export const ToDoContext = createContext();
let initialState = {
  todo: [],
};
const todo = (state, action) => {
  switch (action.type) {
    case "addTask": {
      let isExit = state.todo.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExit) {
        return state;
      }
      alert("Task Is added");
      return {
        todo: [...state.todo, action.payload],
      };
    }
    case "deleteTask": {
      console.log(action);
      let updatedToDo = state.todo.filter((item) => {
        return item.id !== action.payload;
      });

      alert("Task Is deleted");
      return {
        todo: updatedToDo,
      };
    }
    case "editTask": {
      console.log(action);
      let updateTask = state.todo.map((item) => {
        return item.id == action.payload.id ? { ...action.payload } : item;
      });

      alert("Task Is Updated");
      return {
        todo: updateTask,
      };
    }

    default: {
      return state;
    }
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todo, initialState);
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};
