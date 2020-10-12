import React, {useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from 'reactstrap';


function Trash(props) {

    const [trashMode, setTrashMode] = useState(false);

const trashHandler = () => {
    props.trashButton()
    setTrashMode(true);
}


    return (
        <div>
            <Button outline className='Button' color="danger" onClick={trashHandler}>Trash 🗑</Button>

            {trashMode &&
            <>

                <Modal isOpen={trashMode}>

                    {/*<ModalBody>*/}


                        <Label>Status:</Label>
                        {props.trashBascket.map(el =>
                           <div>
                               <h5> {el.name} <input type="checkbox"/></h5>

                           </div>
                        )}
                    {/*</ModalBody>*/}
                    <ModalFooter>
                        <Button color="secondary" onClick={() => setTrashMode(false)}>Close</Button>
                        <Button>Restore</Button>
                    </ModalFooter>
                </Modal>

            </>


            }

        </div>
    )
};


export default Trash;