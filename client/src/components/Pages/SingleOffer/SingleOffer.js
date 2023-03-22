import { Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import styles from './SingleOffer.module.scss';
import { activeUser } from '../../../redux/advertRedux.js'
import { useSelector } from "react-redux";

const SingleOffer = ({title, img, location, price, _id, seller}) => {

    const user = useSelector(activeUser);

    return(
        <Col className={styles.offer}>
            <img src={IMGS_URL + img} alt="offer" className={styles.img}></img>
            <span className={styles.title}><b>{title}</b></span>
            <span className="mb-2"><b>Location: </b>{location}</span>
            <span className="mb-2"><b>Price: </b>{price}$</span>
            <span className="mb-2"><b>Seller: </b>{seller.login}</span>
            <div className="d-flex justify-content-between">
                <Link to={"/offer/" + _id }><Button className="mb-2 mx-2">View more</Button></Link>
                {user === seller.login && (
                <Link to={"/offer/edit/" + _id}><Button variant="success">Edit Offer</Button></Link>
                )}
            </div>
        </Col>
    )
}

export default SingleOffer;