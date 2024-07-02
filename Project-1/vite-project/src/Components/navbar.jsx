import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';

function Navbar(props) {
    return (
      <div className='pos'>
        <nav className={props.darkMode ? 'lightMode' : 'navbar'}>
          <FontAwesomeIcon icon={faReact} size="4x" style={{ color: "#003e8f" }} />
          <dl>
            <dd>Home</dd>
            <dd>About</dd>
            <dd>Contact</dd>
            <dd>Services</dd>
          </dl>
          <Button toggleDarkMode={props.toggleDarkMode} sliderRef={props.sliderRef} />
        </nav>
      </div>
    );
  }
  
  export default Navbar;