import React, {useState} from 'react';
import jwt from 'jsonwebtoken';

const AuthCheck = (props) => {
    const [loggedIn, setLoggedIn] = useState(() => {
        return jwt.decode(localStorage.getItem('token'))
    })

    return (
        <div>
            {loggedIn}
        </div>
    );
}

export default AuthCheck; 