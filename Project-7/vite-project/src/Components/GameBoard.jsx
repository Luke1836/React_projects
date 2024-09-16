import React from "react";

export default function GameBoard({ turns, onSelection, gameBoard })
{
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