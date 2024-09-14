import React from "react";
import Players from "./Players";

function Board()
{
    return (
        <div id="game-container">
            <ol id="players">
                <Players initialName="Player-1" symbol="X" />
                <Players initialName="Player-2" symbol="O" />
            </ol>
        GameBoard
        </div>
    );
}

export default Board;