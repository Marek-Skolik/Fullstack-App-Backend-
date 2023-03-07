import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from './Header.module.scss';

const Header = () => {

      return (
        <Navbar bg="dark" className="justify-content-end">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" className="text-light">Home</Nav.Link>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/offer/add" className="text-light">Add offer</Nav.Link>
                    <Nav.Link as={NavLink} to="/offer/edit" className="text-light">Edit offer</Nav.Link>
                </Nav>
            </Nav>

            <Nav className="">
                <Nav.Link as={NavLink} to="/register" className="text-light">Register</Nav.Link>
                <Nav.Link as={NavLink} to="/login" className="text-light">Login</Nav.Link>
            </Nav>

            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search" />
                <Button type="submit" variant="light" className={styles.button}>Search</Button>
            </Form>
        </Navbar>
      );
};

export default Header;