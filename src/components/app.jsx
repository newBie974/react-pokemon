import React from 'react';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import Routing from './routing';

import Nav from '../modules/Nav/nav';
import Header from '../modules/Header/header';
import Footer from '../modules/Footer/footer';

const App = () => (
  <Router>
    <Header />
    <div>
      <Nav />
      <Routing />
    </div>
    <Footer />
  </Router>
);

export default App;
