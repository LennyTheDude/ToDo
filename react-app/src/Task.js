import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
        <ListItem key={task.id} role={undefined} dense button onClick={changeHandler}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isDone}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': `checkbox-list-label-${task.id}` }}
                />
            </ListItemIcon>
            <ListItemText id={`checkbox-list-label-${task.id}`} primary={task.taskName} />
            {/* <ListItemSecondaryAction>
                <IconButton edge="start" aria-label="edit">
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete-forever">
                    <DeleteForeverIcon />
                </IconButton>
            </ListItemSecondaryAction> */}
        </ListItem>
        // <li key={task.id}>
        //     <input
        //         type="checkbox"
        //         checked={isDone}
        //         id={task.id}
        //         onChange={changeHandler}
        //     />
        //         { editing === '' ? 
        //             <span className={isDone ? 'task done-task': 'task'}
        //                 onDoubleClick={doubleClickHandler} >
        //                 {taskName}
        //             </span> :
        //             <input type='text'
        //                 id='edit-task'
        //                 onBlur={blurHandler}
        //                 onKeyPress={keyPressHandler}
        //                 autoFocus={true}
        //                 defaultValue={editing}>
        //             </input>
                    
        //         }
        //     <button onClick={deleteHandler}>
        //         delete
        //     </button>
        // </li>
    );
}

export default Task;  