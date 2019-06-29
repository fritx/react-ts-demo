import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import About from './About';
import Hello from './Hello';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Hello} />
      <Route path="/hello" component={Hello} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default AppRouter;
