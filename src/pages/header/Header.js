import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
      <Navbar bg="#a08affff" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Employee Management System</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Employee</Nav.Link>
            <Nav.Link as={Link} to="/employees" className="nav-link">Get All Employees</Nav.Link>
            <Nav.Link as={Link} to="/employee" className="nav-link">Post Employee</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
}

export default Header;