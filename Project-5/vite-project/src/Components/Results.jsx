import React from "react";

function Results(props) {

    if(props.flag)
    {
        return (
        <div className="results-section">
            <h3>No: of throws required: {props.moves}</h3>
        </div>
    )}
}

export default Results;