import React, { useEffect, useState } from "react";

function Results(props) {

    return (
        <div className="results-section">
            <h2>No: of throws: {props.moves}</h2>
            <h2>Best Record: {props.minMoves === 100 ? "0" : props.minMoves}</h2>
        </div>
    );
}

export default Results;