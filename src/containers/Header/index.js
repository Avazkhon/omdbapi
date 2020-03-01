import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const navBar = [
  { id: 1, label: 'Home', url: '/'},
  { id: 3, label: 'Favorites', url: '/favorites'},
];

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Nav variant="tabs">
      {
        navBar.map((itm) => {
          return (
            <Nav.Item key={itm.id}>
              <Nav.Link href={itm.url}>{itm.label}</Nav.Link>
            </Nav.Item>
          )
        })
      }
    </Nav>
  </Navbar>
);

export default Header;
