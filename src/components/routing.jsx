import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/home-page';
import About from './About/about';

const Routing = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
)

export default Routing;
