import React, { useState, useEffect } from 'react';
import api from './utils/api';

const InputField = (props) => {
    const [inputField, setInputField] = useState({props})

    return (
        <input type="text" id="newTask" onKeyPress={props.onKeyPress}/>
    );
}

export default InputField;  