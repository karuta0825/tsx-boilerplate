import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { createBrowserHistory, History } from 'history';

export function Routes({ history = createBrowserHistory() }: { history: History }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export function Home() {
  const history = useHistory();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => history.push('/users')}>Users</button>
      <button onClick={() => history.push('/about')}>About</button>
    </div>
  );
}

export function About() {
  const history = useHistory();
  return (
    <div>
      <h2>About</h2>
      <button onClick={() => history.push('/')}>Home</button>
      <button onClick={() => history.push('/users')}>Users</button>
    </div>
  );
}

export function Users() {
  const history = useHistory();
  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => history.push('/')}>Home</button>
      <button onClick={() => history.push('/about')}>About</button>
    </div>
  );
}
