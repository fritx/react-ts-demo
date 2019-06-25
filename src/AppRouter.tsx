import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import Wall from './Wall';
import About from './About';
import App from './App';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/about" component={About} />
      <Route path="/wall" component={Wall} />
    </Router>
  );
}

export default AppRouter;
