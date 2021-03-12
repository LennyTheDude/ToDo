import React, {useState, useEffect} from 'react';
import TaskList from './tasklist/TaskList';
import jwt from 'jsonwebtoken';
import LoginPage from './authpage/LoginPage';
import api from '../utils/api';


const AuthCheck = () => {
    
    const [token, setToken] = useState(() => {
        return localStorage.getItem('accessToken')
    })

    const [loggedIn, setLoggedIn] = useState(() => {
        try {
            const exptime = jwt.decode(token).exp
            const now = Math.floor(Date.now() / 1000)
            return (exptime > now)
        } catch {
            return (false)
        }
    })

    const [name, setName] = useState(() => {
        try {
            return jwt.decode(token).userName
        } catch {
            return ('')
        }
    })

    useEffect( async () => {
		setLoggedIn(() => {
            try {
                const exptime = jwt.decode(token).exp
                const now = Math.floor(Date.now() / 1000)
                return (exptime > now)
            } catch {
                return (false)
            }
        });
        setName(() => {
            try {
                return jwt.decode(token).userName
            } catch {
                return ('')
            }
        })
  	}, [token])

    // const getInfo = () => {

    // }

    const logIn = async (un, pwd) => {
		try {
            const token = await api.post(
                '/login/', {name: un, password: pwd}
            );
            localStorage.setItem('accessToken', token.data.token)
            setToken(token.data.token)
            setLoggedIn(true)
            setName(jwt.decode(token.data).userName)
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
            {loggedIn ? <TaskList username={name} token={token} logOut={logOut} /> :
            <LoginPage logIn={logIn} />}
        </div>
    );
}

export default AuthCheck; 