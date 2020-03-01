import React from 'react';
import { Nav } from 'react-bootstrap';

const navBar = [
  { id: 1, label: 'Главная', url: '/'},
  { id: 3, label: 'Избранное', url: '/favorites'},
]

const Header = () => (
  <Nav variant="tabs">
    {
      navBar.map((itm) => {
        return (
          <Nav.Item>
            <Nav.Link key={itm.id} href={itm.url}>{itm.label}</Nav.Link>
          </Nav.Item>
        )
      })
    }
  </Nav>
);

export default Header;
