import React, { useState, useEffect } from 'react';
import './styles/App.css';
import TaskList from './components/tasklist/TaskList';
import Paper from '@material-ui/core/Paper'
import AuthCheck from './components/AuthCheck';
import LoginPage from './components/authpage/LoginPage';

const App = () => {
	return (
		<div className="App">
			<Paper elevation={3} children={
				<div>
					{/* <div id="heading">
						<h1>Your To-Do List</h1>
					</div>
					<TaskList /> */}
					{/* <AuthCheck /> */}
					<AuthCheck />
				</div>
			} />
		</div>
  	);
}

export default App;