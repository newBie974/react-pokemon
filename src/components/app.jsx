import React from 'react';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import Routing from './routing';

import styles from './app.module.css';

import Nav from '../modules/Nav/nav';
import Header from '../modules/Header/header';
import Footer from '../modules/Footer/footer';

const App = () => (
  <Router>
    
    <div className={styles.app}>
      <Header />
        <Nav />
        <Routing />
      <Footer />
    </div>
    
  </Router>
);

export default App;
