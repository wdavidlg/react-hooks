import React, { useEffect, useReducer } from "react";
import "./TaskApp.css";
import { taskReducer } from "./taskReducer";
import TaskList from "./TaskList";
import TaskAdd from "./TaskAdd";

const initialState = JSON.parse(localStorage.getItem("data")) || [];

const init = (initialState) => {
  return initialState;
};

const TaskApp = () => {
  // const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [tasks, dispatch] = useReducer(taskReducer, initialState, init);

  useEffect(() => {
    const data = JSON.stringify(tasks);
    localStorage.setItem("data", data);
  }, [tasks]);

  const complete = (taskId) => {
    dispatch({ type: "complete", payload: taskId });
  };

  const handleDelete = (taskId) => {
    dispatch({ type: "delete", payload: taskId });
  };

  const handleAdd = (newTask) => {
    dispatch({type: "add", payload: newTask});
  }

  return (
    <div>
      <h1>TaskApp( {tasks.length} )</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TaskList
            tasks={tasks}
            complete={complete}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5 mx-auto">
          <TaskAdd handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
