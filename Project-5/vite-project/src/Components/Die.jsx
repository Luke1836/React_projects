import React from "react";

function Die(props) {
    return (
        <div className="die-box">
            <h2>{props.value}</h2>
        </div>
    )
}

export default Die;