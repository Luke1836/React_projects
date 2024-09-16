import React from "react";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ turns, onSelection })
{
    let gameBoard = initialBoard;

    for (const turn of turns) {
        /* We are getting the data in the turns Array, if any */
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={ () => onSelection(rowIndex, colIndex) } disabled={playerSymbol !== null}>{ playerSymbol }</button>
                            </li>
                        )
                        )}
                    </ol>
                </li>
            ))}
        </ol>
    )

}