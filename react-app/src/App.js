import React, { useState, useEffect } from 'react';
import './App.css';
import api from './utils/api';
import Task from './task';

const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const App = () => {
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
	const handleKeyPress = async (event) => {
		if(event.key === 'Enter'){
			const query = {"taskName": `${event.target.value}`}
			const result = await api.post(
				'/task/', query
			);
			event.target.value = ''
			tasks.unshift(result.data);
			console.log(tasks);
			forceUpdate();
		}
	}


  	return (
		<div className="App">
			<h1>Your To-Do List</h1>
            <input type="text" id="newTask" onKeyPress={handleKeyPress} />
			<ul>
				{tasks.map(task => (
					<Task key={task.id} {...task}/>
				))}
			</ul>
		</div>
  	);
}

export default App;