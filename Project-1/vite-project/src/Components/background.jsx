import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Background() {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={faReact} size="10x" style={{ color: "#003e8f" }} />
        </div>
    )
}

export default Background;
