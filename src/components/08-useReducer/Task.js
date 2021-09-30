import React from "react";

const Task = ({task, i, handleDelete, complete}) => {
  return (
    <li className="list-group-item">
      <p
        className={task.done ? 'complete': ''}
        onClick={() => {
          complete(task.id);
        }}
      >
        {i + 1}. {task.task}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>
        Del
      </button>
    </li>
  );
};

export default Task;
