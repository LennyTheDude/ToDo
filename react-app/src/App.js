import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';

const App = () => {
	return (
		<div className="App">
			<h1>Your To-Do List</h1>
			<TaskList />
		</div>
  	);
}

export default App;