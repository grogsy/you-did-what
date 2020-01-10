import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const EmptyTaskList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Lazy Bum! You no have tasks!</h1>
          <Button href="/new" variant="primary">
            Create One
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EmptyTaskList;
