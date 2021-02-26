import React, { useState, useEffect } from 'react';

const OutputParams = (props) => {
    const handleChangeOrder = (event) => {
        props.changeOrder(event.target.id)
    }
    
    const handleChangeFilter = (event) => {
        props.changeFilter(event.target.id);
    }

    return (
        <div>
            <div>
                <input type="button" id="DESC" value="Newest First" onClick={handleChangeOrder} />
                <input type="button" id="ASC" value="Oldest First" onClick={handleChangeOrder} />
            </div>
            <div>
                <input type="button" id="all" value="All" onClick={handleChangeFilter} />
                <input type="button" id="done" value="Done" onClick={handleChangeFilter} />
                <input type="button" id="undone" value="Undone" onClick={handleChangeFilter} />
            </div>
        </div>
    );
}

export default OutputParams; 