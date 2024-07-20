import React, {useState} from "react";
import Die from "./Die";

function Main() {

    const [dice, setDice] = useState(allNewDice());

    function allNewDice() {
        const newDice = [];
        for(let i = 0 ; i < 10 ; i++)
            newDice.push(Math.ceil(Math.random() * 6));

        return newDice;
    }

    const diceElements = dice.map(die => <Die value={die} />);

    return (
        <main className="main">
            <div className="dice-container">
                {diceElements}
            </div>
            <button>
                Roll
            </button>
        </main>
    )
}

export default Main;