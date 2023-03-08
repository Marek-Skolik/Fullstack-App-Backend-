import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Views/Footer/Footer';
import Header from './components/Views/Header/Header';
import HomePage from './components/Pages/HomePage/HomePage';
import AddOffer from './components/Pages/AddOffer/AddOffer';
import EditOffer from './components/Pages/EditOffer/EditOffer';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import Register from './components/Pages/RegisterPage/RegisterPage';


function App() {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/offer/add" element={<AddOffer/>}/>
          <Route path="/offer/edit" element={<EditOffer/>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer /> 
      </Container>
    </div>
  );
}

export default App;
