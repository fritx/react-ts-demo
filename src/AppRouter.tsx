import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import About from './About';
import App from './App';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default AppRouter;
