import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";

import { getTasks } from "../state";
import Routes from "./Routes";
import Navbar from "./Navbar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Container style={style.container} fluid>
        <Routes />
      </Container>
    </>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default App;
