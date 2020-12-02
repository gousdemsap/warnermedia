import React, {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux';
import { Form, Modal, Button, FormControl, InputGroup } from "react-bootstrap";
import { EditTitle, NewTitle } from '../services/titles';

export const NewTitleModal = () => {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-success'>New Title</Button>
        <TitleModal title={null} handleFormSubmit={NewTitle} show={show} handleClose={handleClose}/>
    </div>
}

export const EditTitleModal = (title) => {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-warning'>Edit</Button>
        <TitleModal title={title} handleFormSubmit={EditTitle} show={show} handleClose={handleClose}/>
    </div>
}

const TitleModal = ({title, handleFormSubmit, show, handleClose}) => {
     const [modalTitle, setModalTitle] = useState('');
     const dispatch = useDispatch();

     useEffect(() => {
        setModalTitle(title);
     },[title]);

    return (
              
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Form onSubmit={event => {
              event.preventDefault();
              handleFormSubmit(dispatch, modalTitle)
          }}>
          <Modal.Body>
              <InputGroup>
                <FormControl value={modalTitle === null ? '' : modalTitle}
                onChange={event => setModalTitle(event.target.value)} />
              </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
          </Form>
        </Modal>
    
    ); 

}


