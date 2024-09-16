import React,{ useState } from "react";
import Players from "./Players";
import GameBoard from "./GameBoard";
import Log from "./Log";

function Board()
{
    const [gameTurns, setGameTurns] = useState([]);
    const [activePlayer, setActivePlayer] = useState("X");

    function handleSelect(rowIndex, colIndex)
    {
        setActivePlayer(prevPlayer => prevPlayer === "X" ? "O" : "X");

        setGameTurns((prevTurn) => {
            let currentPlayer = "X";

            if(prevTurn.length > 0 && prevTurn[0].player === "X"){
                currentPlayer = "O";
            }

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