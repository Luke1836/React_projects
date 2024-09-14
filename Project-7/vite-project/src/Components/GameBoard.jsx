import React from "react";
const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard()
{
    return (
        <ol id="game-board">
            {initialBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cellNum, colIndex) => (
                            <li key="colIndex">
                                <button>{ cellNum }</button>
                            </li>
                        )
                        )}
                    </ol>
                </li>
            ))}
        </ol>
    )

}