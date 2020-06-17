import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage/home-page';
import About from './About/about';

const Routing = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route exact path="/" component={HomePage} />
  </Switch>
)

export default Routing;
