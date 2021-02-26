import React, { useState, useEffect } from 'react';

const InputField = (props) => {
    return (
        <input type="text" id="newTask" onKeyPress={props.handleKeyPress}/>
    );
}

export default InputField;  