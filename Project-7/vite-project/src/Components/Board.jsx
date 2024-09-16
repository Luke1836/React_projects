import React,{ useState } from "react";
import Players from "./Players";
import GameBoard from "./GameBoard";
import Log from "./Log";


/* Helper function that doesn't depend upon the state, doesn't get re-created when the state changes */
function setActivePlayer(gameTurns)
{
    let currentPlayer = "X";

    if(gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}


function Board()
{
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = setActivePlayer(gameTurns);

    function handleSelect(rowIndex, colIndex)
    {

        setGameTurns((prevTurn) => {
            const currentPlayer = setActivePlayer(prevTurn);

            const updatedTurn = [
                { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
                ...prevTurn,
            ];
            
            return updatedTurn;
        });
    }

    return (
        <>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Players 
                        initialName="Player-1" 
                        symbol="X" 
                        isActive={activePlayer==="X"} 
                    />
                    <Players 
                        initialName="Player-2" 
                        symbol="O" 
                        isActive={activePlayer==="O"} 
                    />
                </ol>
                <GameBoard 
                    turns = {gameTurns}
                    onSelection={ handleSelect} 
                />
            </div>
            <Log turns={gameTurns} />
        </>
    );
}

export default Board;