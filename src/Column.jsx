import React from "react";
import Task from "./Task";

function Column(props) {
    return (
        <div className='col-4 col-sm' style={{border: '1px solid'}}>
            <h3>
                {props.column.title}
            </h3>
            {props.task.filter(el => el.status === props.column.status)
                .map(el => <Task task={el} changeTaskStatus={props.changeTaskStatus}
                                 buttonDelete={props.buttonDelete} key={el.id}/>)}
        </div>
    )
}

export default Column;