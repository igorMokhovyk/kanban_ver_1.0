import React from "react";

function Task (props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className="card-title">{props.task.name}</h5>

                {props.task.status}
            </div>
        </div>
    )
};

export default Task;