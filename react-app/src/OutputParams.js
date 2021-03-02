import React, { useState, useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const OutputParams = (props) => {
    const handleChangeOrder = (event) => {
        props.changeOrder(event.target.type === "button" ? event.target.id : event.target.parentNode.id)
    }
    
    const handleChangeFilter = (event) => {
        props.changeFilter(event.target.type === "button" ? event.target.id : event.target.parentNode.id);
    }

    return (
        <div>
            <div>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button id="DESC" onClick={handleChangeOrder}>Newest First</Button>
                    <Button id="ASC" onClick={handleChangeOrder}>Oldest First</Button>
                </ButtonGroup>
            </div>
            <div>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button id="all" onClick={handleChangeFilter}>All</Button>
                    <Button id="done" onClick={handleChangeFilter}>Done</Button>
                    <Button id="undone" onClick={handleChangeFilter}>Undone</Button>
                </ButtonGroup>
                {/* <input type="button" id="all" value="All" onClick={handleChangeFilter} />
                <input type="button" id="done" value="Done" onClick={handleChangeFilter} />
                <input type="button" id="undone" value="Undone" onClick={handleChangeFilter} /> */}
            </div>
        </div>
    );
}

export default OutputParams; 