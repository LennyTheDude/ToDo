import React, { useState, useEffect } from 'react';
import './App.css';
import api from './utils/api';
import Task from './task';

const App = () => {
	const [tasks, setTasks] = useState([])
	const [orderBy, setOrderBy] = useState("DESC")
  
	useEffect( async () => {
		const query = {"orderBy": `${orderBy}`}
		const result = await api.get(
			'/tasks/', query
		);
    	setTasks(result.data);
  	}, [])

  	return (
		<div className="App">
			<h1>Your To-Do List</h1>
			<ul>
				{tasks.map(task => (
					<Task {...task}/>
				))}
			</ul>
		</div>
  	);
}

export default App;