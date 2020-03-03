import React, { useContext } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

import { ThemeContext } from "../../context/theme";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../state/user/userActionCreators";

const NavbarTop = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const context = useContext(ThemeContext);
  const email = useSelector(state => state.user.email);

  // console.log(context.theme);

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
          {email ? (
            <>
              <Nav.Link className="text-light" href="/new">
                New
              </Nav.Link>
              <Nav.Link className="text-light" href="/random">
                Random
              </Nav.Link>
            </>
          ) : (
            <Nav.Link className="text-light" href="/login">
              Login
            </Nav.Link>
          )}
        </Nav>
        <Nav className="justify-content-end mr-4">
          {/* <Nav.Item>
            <Form.Check
              className="text-light mt-2 mr-3"
              type="switch"
              id="custom-switch"
              custom
              onChange={context.toggleTheme}
              // label={isDarkMode ? themes.dark.label : themes.light.label}
              label="Toggle Light/Dark Mode"
            />
          </Nav.Item> */}
          <NavDropdown
            variant="dark"
            title={email ? `Welcome, ${email}` : "You are not signed in"}
          >
            {email ? (
              <>
                <NavDropdown.Item href="/stats">Stats</NavDropdown.Item>
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#"
                  onClick={() => {
                    dispatch(logout()).then(() => history.push("/login"));
                  }}
                >
                  Sign Out
                </NavDropdown.Item>
              </>
            ) : (
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            )}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarTop;
