import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

const OutputParams = (props) => {
    const handleChangeOrder = (event) => {
        props.changeOrder(event.currentTarget.id)
    }
    
    const handleChangeFilter = (event) => {
        props.changeFilter(event.currentTarget.id);
    }

    return (
        <div id="filters">
            <div>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button id="ASC" onClick={handleChangeOrder} >
                        <VerticalAlignBottomIcon /> 
                    </Button>
                    <Button id="DESC" onClick={handleChangeOrder} >
                        <VerticalAlignTopIcon />
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <ButtonGroup color="secondary" aria-label="outlined primary button group">
                    <Button id="all" onClick={handleChangeFilter}>All</Button>
                    <Button id="done" onClick={handleChangeFilter}>Done</Button>
                    <Button id="undone" onClick={handleChangeFilter}>Undone</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default OutputParams; 