import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ToDoContext } from "./Context/ToDoProvider";

function Edit() {
  const location = useLocation();
  const [updatedTask, setUpdatedTask] = useState(location.state.task);

  const { dispatch } = useContext(ToDoContext);

  const navigate = useNavigate();

  return (
    <div className=" w-96  m-auto   p-5 space-x-2 mt-10">
      <input
        value={updatedTask}
        onChange={(e) => {
          setUpdatedTask(e.target.value);
        }}
        type="text"
        placeholder="Enter Your Task"
        className="  outline-none border   p-2 rounded-2xl "
      />
      <button
        onClick={() => {
          dispatch({
            type: "editTask",
            payload: { id: location.state.id, task: updatedTask },
          });
          navigate("/")
        }}
        className="bg-orange-400  p-2 rounded-2xl text-white"
      >
        Update Task
      </button>
    </div>
  );
}

export default Edit;
