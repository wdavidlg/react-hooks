import React from 'react'
import { useForm } from "../../hooks/useForm";

const TaskAdd = ({handleAdd}) => {
    const [{ task }, handleInputChange, reset] = useForm({
        task: "",
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim().length === 0) return;
        const newTask = {
          id: new Date().getTime(),
          task: task,
          done: false,
        };
        handleAdd(newTask);
        reset();
      };

    return (
        <>
          <h4>Add Task</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              value={task}
              type="text"
              name="task"
              className="form-control"
              placeholder="Task"
              autoComplete="off"
            />
            <button type="submit" className="btn btn-outline-primary btn-add">
              Add
            </button>
          </form>  
        </>
    )
}

export default TaskAdd
