import React, { lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

// const Routes = lazy(() => import("./Routes"));
import Navbar from "./Navbar";

const App = props => {
  return (
    <>
      <Navbar />
      <Container style={style.container} fluid>
        <Suspense fallback={<Spinner variant="info" animation="border" />}>
          {props.children}
        </Suspense>
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
