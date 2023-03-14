import SingleOffer from "../SingleOffer/SingleOffer";
import { Container, Row, Alert } from "react-bootstrap";


const SearchPage = () => {

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