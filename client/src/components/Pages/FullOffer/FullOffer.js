import { getOfferById } from "../../../redux/adsRedux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './FullOffer.module.scss';
import { IMGS_URL } from "../../../config";

const FullOffer = () => {
  const { id } = useParams();
  const offer = useSelector(state => getOfferById(state, id));
  console.log(offer);
  if(!offer)
  return(
    <h2>Wczytywanie</h2>
  )
  return (
    <div>
      <div className={styles.photoContainer}>
        <img src={IMGS_URL + offer.img} alt="offer" className={styles.img}></img>
        <div className={styles.info}>
          <span className={styles.title}>{offer.title}</span>
          <span className={styles.price}><b>Price:</b> {offer.price}$</span>
          <span className={styles.price}><b>Seller: </b>{offer.seller.login}</span>
          <span>{offer.localization + ' '}{offer.publicDate}</span>
          <span className={styles.content}>Description:</span>
          <span>{offer.content}</span>
        </div>
      </div>
    </div>
  );
}

export default FullOffer;