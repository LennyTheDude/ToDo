import React, { useState, useEffect } from 'react';
import api from './utils/api';

const Task = (props) => {
    let [task, setTask] = useState({props})

    useEffect(() => {
        setTask(props);
    }, [])

    let [isDone, setIsDone] = useState()

    useEffect(() => {
        setIsDone(task.isDone);
    })
    
    


    const onChangeHandler = async (event) => {
        const query = {"taskId": `${task.id}`, "isDone": `${!task.isDone}`}
        const newTask = await api.put(
            '/task/', query
        );
        isDone = newTask.isDone
        event.target.checked = !event.target.checked
    }

    return (
        <li key={task.id}>
            <input type="checkbox" checked={isDone} id={task.id} onChange={onChangeHandler} />
            <span>
                {task.taskName}
            </span>
        </li>
    );
}

export default Task;  