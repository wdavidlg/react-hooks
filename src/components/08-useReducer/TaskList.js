import React from 'react'
import Task from './Task'

const TaskList = ({tasks, complete, handleDelete}) => {
    return (
        <>
             <ul className='list-group list-group-flush'>
                {
                    tasks.map( (task, i) => {
                        return(
                            <Task 
                            key={task.id}
                            task={task}
                            i={i}
                            complete={complete}
                            handleDelete={handleDelete} />
                        );
                    })
                }
            </ul>
        </>
    )
}

export default TaskList
