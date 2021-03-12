import React, { useState, useEffect } from 'react';
import './styles/App.css';
import TaskList from './components/tasklist/TaskList';
import Paper from '@material-ui/core/Paper'
import AuthCheck from './components/AuthCheck';
import LoginPage from './components/authpage/LoginPage';
import SignUpPage from './components/authpage/SignUpPage';

const App = () => {
	return (
		<div className="App">
			<Paper elevation={3} children={
				<div>
					<AuthCheck />
				</div>
			} />
		</div>
  	);
}

export default App;