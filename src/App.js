import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignUp, SignIn } from './pages';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
    </Router>
  );
}
