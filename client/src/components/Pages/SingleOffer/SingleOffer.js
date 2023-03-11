import { Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import styles from './SingleOffer.module.scss';

const SingleOffer = (img) => {
    return(
        <Col>
            <img src={IMGS_URL + img} alt="offer"></img>
            <span className={styles.title}><b></b></span>
            <span className="mb-1"><b>Localization: </b></span>
            <span className="mb-1"><b>Seller:</b></span>
            <div className="d-flex justify-content-between">
                <Link to={"/offer/" }><Button>View more</Button></Link>
                <Link to={"/offer/edit/" }><Button variant="success">Edit Offer</Button></Link>
            </div>
        </Col>
    )
}

export default SingleOffer;