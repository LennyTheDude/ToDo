import React, { useState, useEffect } from 'react';
import api from './utils/api';
import Task from './Task';
import InputField from './InputField';

const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const TaskList = () => {
	const [tasks, setTasks] = useState([])
	const [orderBy, setOrderBy] = useState('DESC')

	useEffect( async () => {
		const query = {"orderBy": `${orderBy}`}
		const result = await api.get(
			'/tasks/', query
		);
    	setTasks(result.data);
  	}, [])

	const forceUpdate = useForceUpdate();

	const addTask = (task) => {
		tasks.unshift(task);
	}

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
			const newTasks = tasks;
			newTasks.unshift(result.data);
			console.log(newTasks);
			setTasks(newTasks);
			forceUpdate();
		}
	}

  	return (
		<div className="taskList">
			<InputField onKeyPress={handleKeyPress}/>
            <ul>
				{tasks.map(task => (
					<Task
						key={task.id}
						addTask={addTask}
						deleteTask={deleteTask}
						{...task}/>
				))}
			</ul>
		</div>
  	);
}

export default TaskList;