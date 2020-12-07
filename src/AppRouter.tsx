import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import { About } from './About';
import { Hello } from './Hello';
import { ContX } from './contX/ContX';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={ContX} />
      <Route path="/hello" component={Hello} />
      <Route path="/about" component={About} />
    </Router>
  );
};

export default AppRouter;
