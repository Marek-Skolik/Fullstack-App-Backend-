import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Views/Footer/Footer';
import Header from './components/Views/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import AddOffer from './components/Pages/AddOffer/AddOffer';
import EditOffer from './components/Pages/EditOffer/EditOffer';


function App() {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/offer/add" element={<AddOffer/>}/>
          <Route path="/offer/edit" element={<EditOffer/>}/>
        </Routes>
        <Footer /> 
      </Container>
    </div>
  );
}

export default App;
