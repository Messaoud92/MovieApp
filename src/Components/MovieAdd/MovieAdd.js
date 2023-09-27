import React , { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './MovieAdd.css';
import Form from 'react-bootstrap/Form';



function MovieAdd() {

      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='movieadd'>
        <Button variant="primary" onClick={handleShow}>
    Add Movie      
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            
            
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Movie name</Form.Label>
              <Form.Control type="text" placeholder="Enter movie name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control type="text" placeholder="Enter movie Image" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Movie Description</Form.Label>
              <Form.Control type="text" placeholder="Enter movie Description" />

            </Form.Group>           
            <Form.Group className="mb-3" controlId="formBasicRating">
              <Form.Label>Movie Rating</Form.Label>
              <Form.Control type="text" placeholder="Enter movie Rating" />

            </Form.Group>  
          </Form>


        </Modal.Body>
        
        
        
        
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MovieAdd