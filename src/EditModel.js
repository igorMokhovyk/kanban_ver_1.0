import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from 'reactstrap';


function EditModel(props) {


    const [nameInput, setNameInput] = useState(props.task.name);
    const [statusInput, setStatusInput] = useState(props.task.status);

    const createButtonHandler = () => {
        props.edit(props.task.id, {name: nameInput, status: statusInput})
     props.openEditModel()

    }


    return (
        <div>

            <>

                <Modal isOpen={props.editMode}>
                    <ModalHeader>Edit task</ModalHeader>
                    <ModalBody>
                        <Label>Name:</Label>
                        <Input type="text" value={nameInput}
                               onChange={(event) => setNameInput(event.target.value)}/>
                        <Label>Status:</Label>
                        <Input type="select" value={statusInput}
                               onChange={(event) => setStatusInput(event.target.value)}>
                            <option>fe</option>
                        </Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={createButtonHandler}>Update</Button>{' '}
                        <Button color="secondary" onClick={() => props.openEditModel()}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </>



        </div>
    )
}


export default EditModel;