import React from "react";
import { Switch, Route } from "react-router-dom";
import TaskList from "./task/TaskList";
import TaskForm from "./task/TaskForm";
import SingleTask from "./task/SingleTask";
import Settings from "./user/Settings";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/tasks/:id" component={SingleTask} />
      <Route path="/new" component={TaskForm} />
      <Route path="/settings" component={Settings} />
      <Route component={TaskList} />
    </Switch>
  );
};

export default Routes;
