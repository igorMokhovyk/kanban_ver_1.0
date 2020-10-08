import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from 'reactstrap';


function NewStatus(props) {


    const [statusMode, setStatusMode] = useState(false);

    const [statusInput, setStatusInput] = useState('');

    const createStatusHandler = () => {
        props.createStatuse(statusInput);
        setStatusMode(false);
    }

    return (
        <>
            <Button color='primary' onClick={() => setStatusMode(true)}>Create new Column</Button>

            {statusMode &&
            <>

                <Modal isOpen={statusMode}>
                    <ModalHeader>Create new Column</ModalHeader>
                    <ModalBody>
                        <Label>Column:</Label>
                        <Input type="text" value={statusInput} placeholder="type name here"
                               onChange={(event) => setStatusInput(event.target.value)}/>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={createStatusHandler}>Create</Button>{' '}
                        <Button color="secondary" onClick={() => setStatusMode(false)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </>


            }
        </>
    )
};

export default NewStatus;