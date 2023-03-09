import { Form, Button, Modal } from 'react-bootstrap';


const EditOffer = () => {

  return (
    <Form className="mb-2 mt-2 col-8 mx-auto">

      <div className="d-flex justify-content-between">
        <h1>Edit offer</h1>
        <Button variant="danger">Delete offer</Button>
      </div>

      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Removing offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to remove this offer?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            No
          </Button>
          <Button variant="danger">
            Delete offer
          </Button>
        </Modal.Footer>
      </Modal>
        
      <Form.Group controlId="formTitle" className="mt-2 mb-2">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text"></Form.Control>
      </Form.Group>

      <Form.Group controlId="formPrice" className="mt-2 mb-2">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="number"></Form.Control>
      </Form.Group>

      <Form.Group controlId="formLocalization" className="mt-2 mb-2">
        <Form.Label>Localization:</Form.Label>
        <Form.Control type="text"></Form.Control>
      </Form.Group>
      
      <Form.Group controlId="formDate" className="mt-2 mb-2">
        <Form.Label>Date:</Form.Label>
        <Form.Control type="date"></Form.Control>
      </Form.Group>

      <Form.Group controlId="formDescription" className="mt-2 mb-2">
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text"></Form.Control>
      </Form.Group>

      <Form.Group controlId="formPhoto" className="mb-2 mt-2">
        <Form.Label>Photo:</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Button className="mb-3" variant="dark" type="submit">Submit</Button>

    </Form>
  );
}

export default EditOffer;