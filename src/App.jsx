import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import DevAPI from './components/DevAPI';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <Home isMenuShown={isMenuShown} />
      <Products />
      <DevAPI />
      <Customers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
