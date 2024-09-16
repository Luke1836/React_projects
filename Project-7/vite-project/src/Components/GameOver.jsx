import React from "react";

export default function GameOver({ winner, onRestart })
{
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            { winner && <p>{winner} has won!</p> }
            { !winner && <p>The Game's a Draw!</p> }
            <button onClick={ onRestart }>Rematch!</button>
        </div>
    )
}