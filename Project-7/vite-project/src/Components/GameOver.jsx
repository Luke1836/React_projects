import React from "react";

export default function GameOver({ winner })
{
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            { winner && <p>{winner} has won!</p> }
            { !winner && <p>The Game's a Draw!</p> }
            <button>Rematch!</button>
        </div>
    )
}