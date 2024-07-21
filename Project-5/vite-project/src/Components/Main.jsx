import React, {useState} from "react";
import Die from "./Die";
import {nanoid} from "nanoid";

function Main() {

    const [dice, setDice] = useState(allNewDice());

    function allNewDice() {
        const newDice = [];
        for(let i = 0 ; i < 10 ; i++)
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                id: nanoid(),
                isHeld: false
            });

        return newDice;
    }

    const diceElements = dice.map(die => <Die key={die.id} value={die.value} />);

    function rollDice() {
        setDice(allNewDice());
    }

    return (
        <main className="main">
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="roll-btn">
                Roll
            </button>
        </main>
    )
}

export default Main;