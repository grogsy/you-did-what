import React, { lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import Layout from "./Layout";

const Routes = lazy(() => import("./Routes"));

const App = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};
// import Navbar from "./Navbar";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Container style={style.container} fluid>
//         <Suspense fallback={<Spinner variant="info" animation="border" />}>
//           <Routes />
//         </Suspense>
//       </Container>
//     </>
//   );
// };

// const style = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   }
// };

export default App;
