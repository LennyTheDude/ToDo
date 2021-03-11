import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'

const SignUpPage = () => {
	const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePwdChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSignupClick = () => {
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);
    }

  	return (
		<div className="login">
            <h2>Sign Up</h2>
            <div id="login-form">
                <div>
                    <TextField label="Username" variant="outlined" id="username" onChange={handleUsernameChange} />
                </div>
                <div>
                    <TextField label="Password" variant="outlined" id="password" type="password" onChange={handlePwdChange} />
                </div>
                <div>
                    <Button id="login-button" label="Log In" variant="outlined" onClick={handleSignupClick} >Log In</Button>
                </div>
            </div>
		</div>
  	);
}

export default SignUpPage;