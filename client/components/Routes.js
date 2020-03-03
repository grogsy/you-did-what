import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import TaskList from "../pages/TaskList";
import TaskForm from "../pages/TaskForm";
import SingleTask from "../pages/SingleTask";
import Settings from "./user/Settings";
import RandomTask from "./random/RandomTask";
import Login from "../pages/Login";
import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";
// import PublicPage from "../pages/PublicPage";

import { me } from "../state/user/userActionCreators";

const Routes = () => {
  const [loading, setLoading] = useState(true);
  const loggedIn = useSelector(state => !!state.user.id);
  const loaded = useSelector(state => state.user.loaded);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  }, []);

  useEffect(() => {
    if (loaded) {
      setLoading(false);
    }
  }, [loaded]);

  return (
    !loading && (
      <Switch>
        {loggedIn && (
          <>
            <Route exact path="/" component={TaskList} />
            <Route exact path="/tasks/:id" component={SingleTask} />
            <Route path="/new" component={TaskForm} />
            <Route path="/settings" component={Settings} />
            <Route path="/random" component={RandomTask} />
          </>
        )}
        <Route path="/login" component={Login} />
        <Route component={Loading} />
      </Switch>
    )
  );
};

export default Routes;
