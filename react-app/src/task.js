import React, { useState, useEffect } from 'react';
import api from './utils/api';

const Task = (props) => {
    let [task, setTask] = useState({props})
    let [isDone, setIsDone] = useState(task.isDone)

    useEffect(() => {
        setIsDone(props.isDone)
        setTask(props);
    }, [])

    const onChangeHandler = async (event) => {
        const query = {"taskId": `${task.id}`, "isDone": `${!isDone}`}
        const newTask = await api.put(
            '/task/', query
        );
        isDone = newTask.data.isDone
        event.target.checked = !event.target.checked
    }
    return (
        <li key={task.id}>
            <input type="checkbox" checked={task.isDone} id={task.id} onChange={onChangeHandler} />
            <span>
                {task.taskName}
            </span>
        </li>
    );
}

export default Task;  