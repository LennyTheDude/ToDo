import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const PageSelector = (props) => {
    
    const switchPage = (event) => {
        props.changePage(event.currentTarget.id);
    }
    
    const buttons = [];
    
    for (let i = 1; i <= props.totalPages + 1; i++) {
        buttons.push(<Button id={i} onClick={switchPage}>{i}</Button>);
        
    }

    return (
        <div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                {buttons.map(button => (button))}
            </ButtonGroup>
        </div>
    );
}

export default PageSelector; 