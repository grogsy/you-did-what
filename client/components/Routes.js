import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import TaskList from "./task/TaskList";
import TaskForm from "./task/TaskForm";
import SingleTask from "./task/SingleTask";
// const TaskList = lazy(() => import("./task/TaskList"));
// const SingleTask = lazy(() => import("./task/SingleTask"));

const Routes = props => {
  return (
    <Switch>
      <Route path="/new" component={TaskForm} />
      <Route path="/tasks/:id" component={SingleTask} />
      <Route component={TaskList} />
    </Switch>
  );
};

export default Routes;
