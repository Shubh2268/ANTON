import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <Home isMenuShown={isMenuShown} />
    </div>
  )
}

export default App;
