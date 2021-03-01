import React, { useState, useEffect } from 'react';

const Task = (props) => {
    const [task, setTask] = useState({props})
    const [isDone, setIsDone] = useState(task.isDone)
    const [editing, setEditing] = useState('')
    const [taskName, setTaskName] = useState(props.taskName)

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

    const doubleClickHandler = (event) => {
        setEditing(event.target.innerHTML);
    }

    const blurHandler = () => {
        setEditing('')
    }

    const keyPressHandler = (event) => {
		if (event.key === 'Enter') {
            if (event.target.value !== editing) {
                props.renameTask(task.id, event.target.value)
                setTaskName(event.target.value)
                setEditing('')
            } else {
                setEditing('')
            }
        }
    }

    return (
        <li key={task.id}>
            <input
                type="checkbox"
                checked={isDone}
                id={task.id}
                onChange={changeHandler}
            />
                { editing === '' ? 
                    <span className={isDone ? 'task done-task': 'task'}
                        onDoubleClick={doubleClickHandler} >
                        {taskName}
                    </span> :
                    <input type='text'
                        id='edit-task'
                        onBlur={blurHandler}
                        onKeyPress={keyPressHandler}
                        autoFocus={true}
                        defaultValue={editing}>
                    </input>
                    
                }
            <button onClick={deleteHandler}>
                delete
            </button>
        </li>
    );
}

export default Task;  