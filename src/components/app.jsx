import React from 'react';

import Homepage from './HomePage/home-page';
import About from './About/about';

import Header from '../modules/Header/header';
import Nav from '../modules/Nav/nav';
import Footer from '../modules/Footer/footer';

const App = () => (
  <div>
    <Header />
    <Nav 
      About={About}
      Homepage={Homepage} />
    <Footer />
  </div>  
);

export default App;
