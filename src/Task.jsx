import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ButtonToggle} from 'reactstrap';
import EditModel from "./EditModel";


function Task(props) {

    const [deleteMode, setDeleteMode] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const deleteButton = () => {
        props.buttonDelete(props.task.id, props.task.name, props.task.priority, props.task.status)
        setDeleteMode(!deleteMode)
    }

    const openEditMode = () => {
        setEditMode(!editMode)
    }


    return (
        <div className='card text-white bg-warning mb-3 shadow-sm'>
            <EditModel editMode={editMode} openEditModel={openEditMode} task={props.task} edit={props.editTask}
                       column={props.column}/>
            <div className='card-body'>

                <h6 className="card-text text-dark">Priority: {props.task.priority}</h6>
                <Button size='sm' className='Arrow-but'
                        disabled={props.task.priority === props.priority[props.priority.length - 1]}
                        onClick={() => props.priorityChange(props.task.id, +1)}>↑</Button>
                <Button size='sm' disabled={props.task.priority === props.priority[0]}
                        onClick={() => props.priorityChange(props.task.id, -1)}>↓</Button>
                <h5 className="card-title text-dark">{props.task.name}</h5>
                <p className="card-text text-dark">{props.task.status}</p>
                <button className="btn btn-primary border shadow-lg Arrow-but" disabled={props.task.status === 'todo'}
                        onClick={() => props.changeTaskStatus(props.task.id, 'left')}>←
                </button>
                <button className="btn btn-primary border shadow-lg Arrow-but"

                        onClick={() => props.changeTaskStatus(props.task.id, 'right')}>→
                </button>
                <button className="btn btn-outline-danger EditButton"
                        onClick={() => setDeleteMode(true)}>Delete
                </button>
                <Button outline color='info' className='EditButton' onClick={() => setEditMode(true)}>Edit</Button>
                {deleteMode &&
                <>

                    <Modal isOpen={deleteMode}>
                        <ModalHeader>Do you want to delete "{props.task.name}"?</ModalHeader>
                        <ModalBody>
                            <ButtonToggle color="success"
                                          onClick={deleteButton}>YES</ButtonToggle>{' '}
                            <ButtonToggle color="danger"
                                          onClick={() => setDeleteMode(false)}>CANCEL</ButtonToggle>{' '}
                        </ModalBody>

                    </Modal>
                </>
                }
            </div>
        </div>
    )
}

export default Task;