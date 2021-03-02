import React, { useState, useEffect } from 'react';
import {TextField} from '@material-ui/core'

const InputField = (props) => {
    return (
        <TextField label="Add a new task" variant="outlined" id="newTask" onKeyPress={props.handleKeyPress}/>
    );
}

export default InputField;  