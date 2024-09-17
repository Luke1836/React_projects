import React,{ useState } from "react";
import Players from "./Players";
import GameBoard from "./GameBoard";
import Log from "./Log";
import GameOver from "./GameOver";
import { WINNING_COMBINATIONS } from "./Data_combination/Winning-combination";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

/* Helper function that doesn't depend upon the state, doesn't get re-created when the state changes */
function setActivePlayer(gameTurns)
{
    let currentPlayer = "X";

    if(gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

function deriveWinner(gameBoard, players)
{
    let winner;

    for (const combination of WINNING_COMBINATIONS)
    {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

        if( firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol )
            winner = players[firstSquareSymbol];
    }
    return winner;
}

function deriveGameBoard(gameTurns)
{
    let gameBoard = [...initialBoard.map(array => [...array])]; // Preparing a deep copy, cause otherwise the symbols in the inner cells won't be removed. It won't be back to initial state

    for (const turn of gameTurns) {
        /* We are getting the data in the turns Array, if any */
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return gameBoard
}


function Board()
{
    const [players, setPlayers] = useState({
        X: 'Player 1',
        O: 'Player 2'
    });

    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = setActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);

    const winner = deriveWinner(gameBoard, players);
    const hasDrawn = gameTurns.length === 9 && !winner;


    function handleRestart()
    {
        setGameTurns([])
    }


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

    function handlePlayerNameChange(symbol, name)
    {
        setPlayers(prevPlayers => ({
            ...prevPlayers,
            [symbol]: name
        }));
    }

    return (
        <>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Players 
                        initialName="Player-1" 
                        symbol="X" 
                        isActive={activePlayer==="X"}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Players 
                        initialName="Player-2" 
                        symbol="O" 
                        isActive={activePlayer==="O"}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                <GameBoard 
                    turns = {gameTurns}
                    onSelection={ handleSelect}
                    gameBoard={gameBoard}
                />
                { ( winner || hasDrawn ) && <GameOver winner={winner} onRestart={handleRestart} />}
            </div>
            <Log turns={gameTurns} />
        </>
    );
}

export default Board;