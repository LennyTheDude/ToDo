import React, {useState} from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

const OutputParams = (props) => {
    const [order, setOrder] = useState(props.orderBy)
    const [filter, setFilter] = useState(props.filterBy)
    
    const handleChangeOrder = (event) => {
        props.changeOrder(event.currentTarget.id)
        setOrder(event.currentTarget.id)

    }
    
    const handleChangeFilter = (event) => {
        props.changeFilter(event.currentTarget.id)
        setFilter(event.currentTarget.id)
    }

    return (
        <div id="filters">
            <div>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button id="ASC" onClick={handleChangeOrder} variant={order === 'ASC' ? 'contained' : 'outlined'} >
                        <VerticalAlignBottomIcon /> 
                    </Button>
                    <Button id="DESC" onClick={handleChangeOrder} variant={order === 'DESC' ? 'contained' : 'outlined'} >
                        <VerticalAlignTopIcon />
                    </Button>
                </ButtonGroup>
            </div>
            <div>
                <ButtonGroup color="secondary" aria-label="outlined primary button group">
                    <Button id="all" onClick={handleChangeFilter} variant={filter === 'all' ? 'contained' : 'outlined'}>All</Button>
                    <Button id="done" onClick={handleChangeFilter} variant={filter === 'done' ? 'contained' : 'outlined'}>Done</Button>
                    <Button id="undone" onClick={handleChangeFilter} variant={filter === 'undone' ? 'contained' : 'outlined'}>Undone</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default OutputParams; 