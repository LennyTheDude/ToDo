import React, {useState} from 'react';
import TaskList from './tasklist/TaskList';
import jwt from 'jsonwebtoken';
import LoginPage from './authpage/LoginPage';
import api from '../utils/api';


const AuthCheck = () => {
    
    const [token, setToken] = useState(() => {
        // console.log(jwt.decode(token));
        return localStorage.getItem('accessToken')
    })

    const [loggedIn, setLoggedIn] = useState(() => {
        try {
            const exptime = jwt.decode(token).exp
            const now = Math.floor(Date.now() / 1000)
            console.log(exptime > now);
            return (exptime > now)
        } catch {
            return (false)
        }
    })

    const [name, setName] = useState(() => {
        try {
            const uname = jwt.decode(token).userName
            console.log(uname);
        } catch {
            return ('')
        }
    })

    const logIn = async (un, pwd) => {
		try {
            const token = await api.post(
                '/login/', {name: un, password: pwd}
            );
            // console.log(token);
            localStorage.setItem('accessToken', token.data.token)
            setToken(token.data.token)
            setLoggedIn(true)
            setName(jwt.decode(token.data).userName)
            // console.log(localStorage.getItem('accessToken'));   
        } catch (error) {
            console.log({message: error.message});
        }
    }
    const logOut = () => {
        localStorage.removeItem('accessToken')
        setToken('')
        setLoggedIn(false)
        setName('')
    }

    return (
        <div>
            {loggedIn ? <TaskList logOut={logOut} /> :
            <LoginPage logIn={logIn} />}
        </div>
    );
}

export default AuthCheck; 