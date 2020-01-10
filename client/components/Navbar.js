import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavbarTop = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-light" href="/">
        You Did What?!?!
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="this-nav-bar" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link className="text-light" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-light" href="/new">
            Create New Task
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarTop;
