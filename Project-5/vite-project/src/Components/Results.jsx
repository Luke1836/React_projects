import React from "react";

function Results(props) {

    if(props.flag)
    {
        return (
        <div className="results-section">
            <h2>No: of throws required: {props.moves}</h2>
        </div>
    )}
}

export default Results;