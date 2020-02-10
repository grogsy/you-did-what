import React from "react";
import { Switch, Route } from "react-router-dom";

import TaskList from "../pages/TaskList";
import TaskForm from "./task/TaskForm";
// import SingleTask from "./task/SingleTask";
import SingleTask from "../pages/SingleTask";
import Settings from "./user/Settings";
import RandomTask from "./random/RandomTask";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/tasks/:id" component={SingleTask} />
      <Route path="/new" component={TaskForm} />
      <Route path="/settings" component={Settings} />
      <Route path="/random" component={RandomTask} />
      <Route component={TaskList} />
    </Switch>
  );
};

export default Routes;
