import React, { useState, useEffect } from 'react';
import api from './utils/api';
import Task from './Task';
import InputField from './InputField';
import OutputParams from './OutputParams';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}
const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  backgroundColor: theme.palette.background.paper,
	},
}));

const TaskList = () => {
	const [tasks, setTasks] = useState([])
	const [orderBy, setOrderBy] = useState('DESC')
	const [filterBy, setFilterBy] = useState('all')
	
	const classes = useStyles();
	
	useEffect( async () => {
		const result = await api.get(
			'/tasks/', {params: {orderBy: orderBy, filterBy: filterBy}}
		);
    	setTasks(result.data);
  	}, [orderBy, filterBy])

	const forceUpdate = useForceUpdate();

	// const addTask = (task) => {
	// 	setTasks(tasks.push(task))
	// 	// orderBy === 'DESC' ? tasks.push(task) : tasks.push(task)
	// }

	const deleteTask = async (id) => {
		await api.delete(
			'/task/', {data: {taskId: id}}
		);
		const modifiedTasks = tasks.filter(task => task.id !== id )
		setTasks(modifiedTasks)
	}

    const handleKeyPress = async (event) => {
		let input = event.target.value
		if(event.key === 'Enter' && input){
			const result = await api.post(
				'/task/', {"taskName": `${input}`}
			);
			event.target.value = '';
			// console.log(result); // if result.status === 200 => 
			if (filterBy === 'all' || filterBy === 'undone') {
				const newTasks = tasks;
				orderBy === 'DESC' ? tasks.unshift(result.data) : tasks.push(result.data)
				setTasks(newTasks);
				forceUpdate();	
			}
		}
	}

	const changeOrder = async (order) => {
		setOrderBy(() => order);
	}

	const changeFilter = async (filter) => {
		setFilterBy(() => filter);
	}

	const switchTaskStatus = async (id, isDone) => {
        const newTask = await api.put(
            '/task/', {taskId: id, isDone: !isDone}
        );
		let modifiedTasks = [];
		if (filterBy === 'all') {
			modifiedTasks = tasks.map(task => {
				return task.id !== id ? task : newTask.data
			})
		} else {
			modifiedTasks = tasks.filter(task => (
				task.id !== id
			))
		}
		setTasks(modifiedTasks)
	}

	const renameTask = async (id, name) => {
		const newTask = await api.put(
            '/task/', {taskId: id, name: name}
        );
		const modifiedTasks = tasks.map(task => {
			return task.id !== id ? task : newTask.data
		})
		setTasks(modifiedTasks);
	}
	
  	return (
		<div className="taskList">
			<OutputParams
				changeOrder={changeOrder}
				changeFilter={changeFilter} />
			<InputField handleKeyPress={handleKeyPress} orderBy={orderBy} filterBy={filterBy} />
            <List className={classes.root}>
				{tasks.map(task => (
					<Task
						key={task.id}
						deleteTask={deleteTask}
						switchTaskStatus={switchTaskStatus}
						renameTask={renameTask}
						{...task}/>
				))}
			</List>
		</div>
  	);
}

export default TaskList;