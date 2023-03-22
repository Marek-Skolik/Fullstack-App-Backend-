import { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOffer } from '../../../redux/adsRedux';
import { activeUser } from '../../../redux/advertRedux';
import { getRequest } from "../../../redux/requestRedux";

const AddOffer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(activeUser);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [publicDate, setPublicDate] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState(null);
    const [status, setStatus] = useState(false);
    const request = useSelector(getRequest);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addOffer(title, price, location, publicDate, content, img, user));
        setStatus(true);
    }

    useEffect(() => {
        if(user === null) return navigate('/offer/add');
    }, [user]);

    if(request.success === 'adding') {
        return navigate('/');
    };

  return (
    <Form onSubmit={handleSubmit} className="mb-2 mt-2 col-8 mx-auto">
    
        <h1 className="my-4">Add Offer</h1>

        {status === true && (
            <Alert variant="success">
                <Alert.Heading>Success!</Alert.Heading>
                <p>Announcement added!</p>
            </Alert>
        )}

        <Form.Group controlId="formTitle" className="mb-2 mt-2">
            <Form.Label>Title:</Form.Label>
            <Form.Control type="text" placeholder="Enter title" required={true} minLength={10} maxLength={50} onChange={e => setTitle(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="formPrice" className="mb-2 mt-2">
            <Form.Label>Price:</Form.Label>
            <Form.Control type="number" placeholder="Enter price" required={true} onChange={e => setPrice(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="formLocalization" className="mb-2 mt-2">
            <Form.Label>Localization:</Form.Label>
            <Form.Control type="text" placeholder="Enter localization" required={true} onChange={e => setLocation(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="formDate" className="mb-2 mt-2">
            <Form.Label>Date:</Form.Label>
            <Form.Control type="date" required={true} onChange={e => setPublicDate(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-2 mt-2">
            <Form.Label>Description:</Form.Label>
            <Form.Control type="text" required={true} minLength={20} maxLength={1000} onChange={e => setContent(e.target.value)}></Form.Control>
        </Form.Group>


        <Form.Group controlId="formPhoto" className="mb-2 mt-2">
            <Form.Label>Photo:</Form.Label>
            <Form.Control type="file" required={true} onChange={e => setImg(e.target.files[0])} />
        </Form.Group>

        <Button className="mb-3" variant="dark" type="submit">Add</Button>

    </Form>
  );
}

export default AddOffer;