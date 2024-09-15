import React, { useState } from "react";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard()
{
    const [gameBoard, setGameBoard] = useState(initialBoard);

    function handleChange(rowIndex, colIndex)
    {
        setGameBoard(prevState => {
            const updatedState = [...prevState.map(innerState => [...innerState])];
            updatedState[rowIndex][colIndex] = 'X'
            return updatedState;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cellNum, colIndex) => (
                            <li key="colIndex">
                                <button onClick={() => handleChange(rowIndex, colIndex)}>{ cellNum }</button>
                            </li>
                        )
                        )}
                    </ol>
                </li>
            ))}
        </ol>
    )

}