import React, { useState, useEffect } from 'react';

const OutputParams = (props) => {
    const handleChangeOrder = (event) => {
        console.log(event.target.id);
        props.changeOrder(event.target.id)
    }
    
    return (
        <div>
            <input type="button" id="DESC" value="Newest First" onClick={handleChangeOrder} />
            <input type="button" id="ASC" value="Oldest First" onClick={handleChangeOrder} />
        </div>
    );
}

export default OutputParams; 