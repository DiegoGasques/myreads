import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Loading = () => <div>Loading...</div>;

const AsyncHome = Loadable({
  loader: () => import("../HomePage"),
  loading: Loading,
  render: (loaded, props) => {
    const Component = loaded.default;
    return <Component {...props} />;
  }
});

const AsyncSearch = Loadable({
  loader: () => import("../SearchPage"),
  loading: Loading
});

function Routes({ state, keys }) {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <AsyncHome books={state.books} keys={keys} />}
        />
        <Route path="/search" component={AsyncSearch} />
      </Switch>
    </Router>
  );
}

export default Routes;
