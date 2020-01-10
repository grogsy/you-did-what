import React from "react";
import { Switch, Route } from "react-router-dom";
import TaskList from "./task/TaskList";
import TaskForm from "./task/TaskForm";

const Routes = props => {
  return (
    <Switch>
      <Route path="/new" component={TaskForm} />
      <Route component={TaskList} />
    </Switch>
  );
};

export default Routes;
