import React from "react";

export default function GameBoard({ turns, onSelection, gameBoard })
{
    return (
        <div id="game-board">
            <ol>
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
        </div>
    )
}