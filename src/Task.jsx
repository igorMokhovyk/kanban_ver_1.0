import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ButtonToggle} from 'reactstrap';


function Task(props) {

    const [deleteMode, setDeleteMode] = useState(false)


    return (
        <div className='card border-secondary text-white bg-warning mb-3 shadow-lg'>
            <div className='card-body'>
                <h5 className="card-title text-dark">{props.task.name}</h5>
                <p className="card-text text-dark">{props.task.status}</p>
                <button className="btn btn-primary" disabled={props.task.status === 'todo'}
                        onClick={() => props.changeTaskStatus(props.task.id, 'left')}>←
                </button>
                <button className="btn btn-primary"
                        disabled={props.task.status === props.statuses[props.statuses.length - 1]}
                        onClick={() => props.changeTaskStatus(props.task.id, 'right')}>→
                </button>
                <button className="btn btn-outline-danger"
                        onClick={() => setDeleteMode(true)}>Delete
                </button>
                {deleteMode &&
                <>

                    <Modal isOpen={deleteMode}>
                        <ModalHeader>Do you want to delete "{props.task.name}"?</ModalHeader>
                        <ModalBody>
                            <ButtonToggle color="success"
                                          onClick={() => props.buttonDelete(props.task.id)}>YES</ButtonToggle>{' '}
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