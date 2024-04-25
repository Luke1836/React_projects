import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
    return (
        <div className='pos'>
            <nav className='navbar'>
                <FontAwesomeIcon icon={faReact} size="4x" style={{ color: "#003e8f" }} />
                <dl>
                    <dd>Home</dd>
                    <dd>About</dd>
                    <dd>Contact</dd>
                    <dd>Services</dd>
                </dl>
            </nav>
        </div>
    );
}

export default Navbar;