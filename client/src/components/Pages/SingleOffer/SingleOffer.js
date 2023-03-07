import { Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import styles from './SingleOffer.module.scss';

const SingleOffer = (title, img, location, id, seller) => {
    return(
        <Col>
            <img src={IMGS_URL + img} alt="offer"></img>
            <span className={styles.title}><b>{title}</b></span>
            <span className="mb-1"><b>Localization: </b>{location}</span>
            <span className="mb-1"><b>Seller:</b>{seller}</span>
            <div className="d-flex justify-content-between">
                <Link to={"/offer/" + id}><Button>View more</Button></Link>
                <Link to={"/offer/edit/" + id}><Button variant="success">Edit Offer</Button></Link>
            </div>
        </Col>
    )
}

export default SingleOffer;