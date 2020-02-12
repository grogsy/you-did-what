import React, { lazy } from "react";

import Layout from "./Layout";

const Routes = lazy(() => import("./Routes"));

const App = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
