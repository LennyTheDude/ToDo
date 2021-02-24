import React, { useState, useEffect } from 'react';
import api from './utils/api';
import Task from './Task';
import InputField from './InputField';

const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const TaskList = () => {
	let [tasks, setTasks] = useState([])
	let [orderBy, setOrderBy] = useState("DESC")

	useEffect( async () => {
		const query = {"orderBy": `${orderBy}`}
		const result = await api.get(
			'/tasks/', query
		);
    	setTasks(result.data);
  	}, [])

	const forceUpdate = useForceUpdate();

	const handleAddTask = (task) => {
		tasks.unshift(task);

	}

    const handleKeyPress = async (event) => {
		let input = event.target.value
		if(event.key === 'Enter' && input){
			const query = {"taskName": `${input}`}
			const result = await api.post(
				'/task/', query
			);
			event.target.value = ''
			tasks.unshift(result.data);
			forceUpdate();
		}
	}

  	return (
		<div className="taskList">
			<InputField onKeyPress={handleKeyPress}/>
            <ul>
				{tasks.map(task => (
					<Task key={task.id} handleAddTask={handleAddTask} {...task}/>
				))}
			</ul>
		</div>
  	);
}

export default TaskList;