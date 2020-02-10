import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

const NavbarTop = () => {
  const themes = {
    dark: {
      label: "Toggle Light Mode"
    },
    light: {
      label: "Toggle Dark Mode"
    }
  };

  const [isDarkMode, setTheme] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
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
            New
          </Nav.Link>
          <Nav.Link className="text-light" href="/random">
            Random
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end mr-4">
          <Nav.Item>
            <Form.Check
              className="text-light mt-2 mr-3"
              type="switch"
              id="custom-switch"
              custom
              onChange={() => setTheme(!isDarkMode)}
              // label={isDarkMode ? themes.dark.label : themes.light.label}
              label="Toggle Light/Dark Mode"
            />
          </Nav.Item>
          <NavDropdown variant="dark" title="Hello, User!">
            <NavDropdown.Item href="/stats">Stats</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarTop;
