import React, {useState} from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const PageSelector = (props) => {

    const switchPage = (event) => {
        props.changePage(event.currentTarget.id);
    }
    
    const buttons = [];
    
    for (let i = 1; i <= props.totalPages; i++) {
        buttons.push(i);
    }

    return (
        <div>
            <ButtonGroup color="primary" aria-label="outlined primary button group" >
                {buttons.map(i => (
                    <Button id={i}
                        key={i}
                        onClick={switchPage}
                        variant={props.currentPage == i ? 'contained' : 'outlined'}
                    >{i}</Button>
                ))}
            </ButtonGroup>
        </div>
    );
}

export default PageSelector; 