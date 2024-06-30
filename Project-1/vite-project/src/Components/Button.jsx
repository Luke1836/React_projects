import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button() {

    return (
        <div className="button">
            <div className="light">
                <FontAwesomeIcon icon="fa-regular fa-sun" />
            </div>

            <div className="dark">
                <FontAwesomeIcon icon="fa-regular fa-moon" />
            </div>

            <div className="slider">

            </div>
        </div>
        
    );
}

export default Button;