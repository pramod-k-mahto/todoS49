import React, { useContext, useState } from "react";
import { ToDoContext } from "./Context/ToDoProvider";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
function App() {
  const { state, dispatch } = useContext(ToDoContext);
  const [task, setTask] = useState();

  const navigate = useNavigate();
  return (
    <div className="   p-5">
      <h1 className="text-2xl  text-center">This is My Todo App </h1>
      <div className=" w-96 m-auto p-5">
        <input
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
          type="text"
          className="outline-none  p-2  border  rounded-2xl  "
          placeholder="Enter Your Task"
        />
        <button
          onClick={() => {
            dispatch({
              type: "addTask",
              payload: {
                id: uuidv4(),
                task: task,
              },
            });
            setTask("");
          }}
          className="bg-red-500  p-2 ml-2 rounded-2xl"
        >
          Add Task
        </button>
      </div>

      <div className=" w-96 m-auto">
        {state.todo.length > 0 ? (
          <div>
            {state.todo.map((item) => {
              return (
                <div
                  className="flex justify-between   bg-gray-300 my-3  p-2  "
                  key={item.id}
                >
                  <h1 className="   my-2   p-1">{item.task}</h1>

                  <div className="space-x-1.5">
                    <button
                      className="bg-green-600 p-3"
                      onClick={() => {
                        navigate("/edit", { state: item });
                      }}
                    >
                      Edit{" "}
                    </button>
                    <button
                      className="bg-red-600 p-3"
                      onClick={() => {
                        dispatch({ type: "deleteTask", payload: item.id });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No Task Added Yet</div>
        )}
      </div>
    </div>
  );
}

export default App;
