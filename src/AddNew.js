import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from 'reactstrap';


function AddNew(props) {

    const [createMode, setCreateMode] = useState(false)
    const [nameInput, setNameInput] = useState('');
    const [statusInput, setStatusInput] = useState('todo');

    const createButtonHandler = () => {
        props.createTask(nameInput, statusInput);
        setCreateMode(false);
        setNameInput('');
        setStatusInput('');

    }


    return (
        <div>
            <div className="progress">
            </div>
            <button onClick={() => setCreateMode(true)}>Create</button>
            {createMode &&
            <>

                <Modal isOpen={createMode}>
                    <ModalHeader>Create new Task</ModalHeader>
                    <ModalBody>
                        <Label>Name:</Label>
                        <Input type="text" value={nameInput} placeholder="type name here"
                               onChange={(event) => setNameInput(event.target.value)}/>
                        <Label>Status:</Label>
                        <Input type="select" value={statusInput} onChange={(event) => setStatusInput(event.target.value)}>
                            <option value='todo'>To do</option>
                            <option value='progress'>In progress</option>
                            <option value='review'>Review</option>
                            <option value='done'>Done</option>
                        </Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={createButtonHandler}>Create new Task</Button>{' '}
                        <Button color="secondary" onClick={() => setCreateMode(false)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </>


            }
        </div>
    )
}


export default AddNew;