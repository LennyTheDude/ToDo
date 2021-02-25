import React, { useState, useEffect } from 'react';
import api from './utils/api';

const Task = (props) => {
    const [task, setTask] = useState({props})
    let [isDone, setIsDone] = useState(task.isDone)

    useEffect(() => {
        setIsDone(props.isDone)
        setTask(props);
    }, [])

    const onChangeHandler = async (event) => {
        const query = {taskId: `${task.id}`, "isDone": `${!isDone}`}
        const newTask = await api.put(
            '/task/', query
        );
        isDone = newTask.data.isDone
        event.target.checked = isDone
    }

    const deleteHandler = async () => {
        props.deleteTask(props.id)
    }

    return (
        <li key={task.id}>
            <input
                type="checkbox"
                checked={isDone}
                id={task.id}
                onChange={onChangeHandler}
            />
            <span>
                {task.taskName}
            </span>
            <button onClick={deleteHandler}>
                delete
            </button>
        </li>
    );
}

export default Task;  