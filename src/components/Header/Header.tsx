import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.header}>
      <Container>
        <Navbar.Brand as={Link} to="/">Kalp Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;