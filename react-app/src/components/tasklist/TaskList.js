import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Task from './Task';
import InputField from './InputField';
import OutputParams from './OutputParams';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import PageSelector from './PageSelector'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  backgroundColor: theme.palette.background.paper,
	},
}));

const TaskList = (props) => {
	const [tasks, setTasks] = useState([])
	const [orderBy, setOrderBy] = useState('DESC')
	const [filterBy, setFilterBy] = useState('all')
	const [totalPages, setTotalPages] = useState(1)
	const [currentPage, setCurrentPage] = useState(1)

	const classes = useStyles();
	
	useEffect( async () => {
		getTasks();
  	}, [orderBy, filterBy, currentPage])

	const getTasks = async () => {
		const result = await api.get(
			'/tasks/', {params: {
				orderBy: orderBy,
				filterBy: filterBy,
				pageNumber: currentPage,
				tasksPerPage: 5
			},
			headers: {
				'Authorization': props.token
			}}
		);
    	setTasks(result.data.rows);
		setTotalPages(Math.ceil(result.data.count / 5));
	}

	const deleteTask = async (id) => {
		await api.delete(
			'/task/', {data: {taskId: id}}
		);
		if (tasks.length === 1) {setCurrentPage(currentPage - 1)}
		getTasks()
		}

    const handleKeyPress = async (event) => {
		let input = event.target.value
		if(event.key === 'Enter' && input){
			const result = await api.post(
				'/task/', {"taskName": `${input}`}
			);
			event.target.value = '';
			// console.log(result); // if result.status === 200 => 
			if ((filterBy === 'all' || filterBy === 'undone') && orderBy === 'DESC') {
				getTasks()
			}
		}
	}

	const changeOrder = async (order) => {
		setOrderBy(() => order);
		setCurrentPage(1)
	}

	const changeFilter = async (filter) => {
		setFilterBy(() => filter);
		setCurrentPage(1)
	}

	const switchTaskStatus = async (id, isDone) => {
        const newTask = await api.put(
            '/task/', {taskId: id, isDone: !isDone}
        );
		if (filterBy === 'all') {
			const modifiedTasks = tasks.map(task => {
				return task.id !== id ? task : newTask.data
			})
			setTasks(modifiedTasks)
		} else {
			if (tasks.length === 1) {setCurrentPage(currentPage - 1)}
			getTasks();
		}
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
	
	const changePage = (page) => {
		setCurrentPage(page)
	}

  	return (
		<div className="task-list">
			<div id="heading">
				<div>
					<h1>Your To-Do List</h1>
				</div>
				<div>
					<Button id="logout"
							onClick={props.logOut}
							variant='contained'
						>log out</Button>
				</div>
			</div>
			<OutputParams
				changeOrder={changeOrder}
				changeFilter={changeFilter} 
				handleKeyPress={handleKeyPress}
				orderBy={orderBy}
				filterBy={filterBy} 
			/>
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
			<PageSelector totalPages={totalPages} changePage={changePage} currentPage={currentPage} />
		</div>
  	);
}

export default TaskList;