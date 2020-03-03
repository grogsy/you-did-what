import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { login, register } from "../state/user/userActionCreators";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialFormState = {
    email: "",
    password: ""
  };

  const [form, setForm] = useState(initialFormState);
  const [method, setMethod] = useState("login");

  const handleSubmit = e => {
    e.preventDefault();
    if (method === "login") {
      dispatch(login(form)).then(() => history.push("/"));
    } else {
      dispatch(register(form)).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-4">
        {method === "login" ? "Sign-In" : "Register"}
      </h1>
      <Row className="justify-content-md-center mt-4">
        <Col className="border rounded py-3" xl={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Don't use a real email for this! This is just a demo."
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Don't use a password you would use on other things! This is just a demo."
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
            </Form.Group>
            <Row>
              <Col>
                <Button variant="primary" type="submit">
                  {method === "login" ? "Log In" : "Register"}
                </Button>
              </Col>
              <Col>
                {method === "login" ? (
                  <>
                    Don't have an account? &nbsp;
                    <a onClick={() => setMethod("register")} href="#">
                      Register
                    </a>
                  </>
                ) : (
                  <>
                    Already have an account? &nbsp;
                    <a onClick={() => setMethod("login")} href="#">
                      Sign-In
                    </a>
                  </>
                )}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
