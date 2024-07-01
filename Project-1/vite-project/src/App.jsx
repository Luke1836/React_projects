import React, { useState, useRef } from 'react';
import Navbar from './Components/navbar.jsx';
import Main from './Components/Main.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const sliderRef = useRef(null);

  function handleChange() {
    setDarkMode(prevState => !prevState);
    sliderRef.current.classList.toggle('active');
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={handleChange} sliderRef={sliderRef} />
      <Main darkMode={darkMode} />
    </>
  );
}

export default App;