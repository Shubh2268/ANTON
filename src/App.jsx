import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import DevAPI from './components/DevAPI';

function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <Home isMenuShown={isMenuShown} />
      <Products />
      <DevAPI />
    </div>
  )
}

export default App;
