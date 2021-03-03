import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';
import Paper from '@material-ui/core/Paper'

const App = () => {
	return (
		<div className="App">
			<Paper elevation={3} children={
				<div>
					<div id="heading">
						<h1>Your To-Do List</h1>
					</div>
					<TaskList />
				</div>
			} />
		</div>
  	);
}

export default App;