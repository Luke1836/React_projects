import React from "react";
import Players from "./Players";

function Board()
{
    return (
        <div id="game-container">
            <ol id="players">
                <Players name="Player-1" symbol="X" />
                <Players name="Player-2" symbol="O" />
            </ol>
        GameBoard
        </div>
    );
}

export default Board;