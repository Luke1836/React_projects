import React from "react";

function Results(props) {

    if(true)
    {
        return (
        <div className="results-section">
            <h2>No: of throws required: {props.moves}</h2>
            <h2>Best Record: {props.minMoves} {props.flag ? "throws" : ""}</h2>
        </div>
    )}
}

export default Results;