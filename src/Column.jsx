import React from "react";
import Task from "./Task";

function Column(props) {
    return (
        <div className='col-4 col-lg' style={{border: '1px solid'}}>
            <h3>
                {props.column.title}
            </h3>
            {props.task.filter(el => el.status === props.column.status).map(el => <Task task={el}/>)}
        </div>
    )
};

export default Column;