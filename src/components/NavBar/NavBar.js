import React from 'react';
import Nav from 'react-bootstrap/Nav';

import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <Nav className="justify-content-end" defaultActiveKey="home">
      <Nav.Link eventKey="home" href="/">
        Home
      </Nav.Link>

      <Nav.Link eventKey="about" href="/about">
        About
      </Nav.Link>

      <Nav.Link eventKey="faq" href="/faq">
        FAQ
      </Nav.Link>
    </Nav>
  );
}

export default NavBar;
