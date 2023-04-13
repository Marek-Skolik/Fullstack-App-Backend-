import SingleOffer from "../SingleOffer/SingleOffer";
import { Container, Row, Alert } from "react-bootstrap";
import { adsList, getAdsBySearchPhrase } from "../../../redux/adsRedux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchOffer } from "../../../redux/adsRedux";

const SearchPage = () => {

  const dispatch = useDispatch();
  const { searchPage } = useParams();
  const ads = useSelector(state => getAdsBySearchPhrase(state, searchPage));

  return (
    <Container>
      {ads.length === 0 && (
      <Alert variant="warning" className="mt-3">
          <Alert.Heading>Sorry!</Alert.Heading>
          <p>There is no offer match your search phrase!</p>
      </Alert>
      )}

      <Row>
        {ads.map(offer => <SingleOffer key={offer._id} {...offer} />)}
      </Row>
    </Container>
  );
}

export default SearchPage;