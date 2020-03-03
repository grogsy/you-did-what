import React from "react";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Loading = props => {
  //   return <Spinner variant="info" animation="border" />;
  return <Redirect to="/login" />;
};

export default Loading;
