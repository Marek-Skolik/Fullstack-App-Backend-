import { Form, Button } from 'react-bootstrap';

const AddOffer = () => {



  return (
    <Form className="mb-2 mt-2 col-8 mx-auto">
    
        <h1 className="my-4">Add Offer</h1>

        <Form.Group controlId="formTitle" className="mb-2 mt-2">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" placeholder="Enter title" required={true} minLength={10} maxLength={50}></Form.Control>
        </Form.Group>

        <Form.Group controlId="formPrice" className="mb-2 mt-2">
            <Form.Label>Price:</Form.Label>
            <Form.Control type="number" placeholder="Enter price" required={true}></Form.Control>
        </Form.Group>

        <Form.Group controlId="formLocalization" className="mb-2 mt-2">
            <Form.Label>Localization:</Form.Label>
            <Form.Control type="text" placeholder="Enter localization" required={true}></Form.Control>
        </Form.Group>

        <Form.Group controlId="formDate" className="mb-2 mt-2">
            <Form.Label>Date:</Form.Label>
            <Form.Control type="date" required={true}></Form.Control>
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-2 mt-2">
            <Form.Label>Description:</Form.Label>
            <Form.Control type="text" required={true} minLength={20} maxLength={1000}></Form.Control>
        </Form.Group>


        <Form.Group controlId="formPhoto" className="mb-2 mt-2">
            <Form.Label>Photo:</Form.Label>
            <Form.Control type="file" required={true} />
        </Form.Group>

        <Button className="mb-3" variant="dark" type="submit">Submit</Button>

    </Form>
  );
}

export default AddOffer;