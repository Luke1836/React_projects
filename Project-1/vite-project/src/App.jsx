import React, { useState, useRef } from 'react';
import Navbar from './Components/navbar.jsx';

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
      <div className='background'>
        <h1>Fun Facts About React</h1>
        <ul className='list-points'>
          <li>Was first released in 2013.</li>
          <li>Was originally created by Jordan Walke.</li>
          <li>Has well over 100k stars on GitHub.</li>
          <li>Maintained by Facebook.</li>
          <li>Powers thousands of enterprises apps, including mobile apps.</li>
        </ul>
      </div>
    </>
  );
}

export default App;