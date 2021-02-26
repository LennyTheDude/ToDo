import React, { useState, useEffect } from 'react';

const Task = (props) => {
    const [task, setTask] = useState({props})
    let [isDone, setIsDone] = useState(task.isDone)

    useEffect(() => {
        setIsDone(props.isDone)
        setTask(props);
    }, [])

    const changeHandler = () => {
        setIsDone(!isDone)
        props.switchTaskStatus(task.id, isDone)
    }

    const deleteHandler = () => {
        props.deleteTask(props.id)
    }

    return (
        <li key={task.id}>
            <input
                type="checkbox"
                checked={isDone}
                id={task.id}
                onChange={changeHandler}
            />
            <span className={isDone ? 'task done-task': 'task'}>
                {task.taskName}
            </span>
            <button onClick={deleteHandler}>
                delete
            </button>
        </li>
    );
}

export default Task;  