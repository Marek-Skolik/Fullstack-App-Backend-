import { Container, Row } from 'react-bootstrap';
import SingleOffer from '../SingleOffer/SingleOffer';
import { useSelector } from 'react-redux';
import { adsList } from '../../../redux/adsRedux';
import { getRequest } from '../../../redux/requestRedux';
import { Spinner } from 'react-bootstrap';
import shortid from 'shortid';

const Homepage = () => {
    const request = useSelector(getRequest);
    const ads = useSelector(adsList);
    console.log(ads);
    
  
    if (request.pending) return (
      <Spinner animation="border" role="status" className="block mx-auto">
        <span className="visually-hidden">Loading</span>
      </Spinner>
    )
    if (request.error) return <h1>Error...</h1>
    if (request.success === true) return (
      <Container>
        <Row>
          {ads.map(offer => <SingleOffer key={shortid()} {...offer} />)}
        </Row>
      </Container>
    )
  }
  
  export default Homepage;