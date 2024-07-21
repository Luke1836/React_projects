import React, {useEffect, useState} from "react";
import Die from "./Die";
import Description from "./Description";
import {nanoid} from "nanoid";
import Confetti from "react-confetti"

function Main() {

    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if(allHeld && allSameValue) {
            setTenzies(true);
            console.log("You won!");
        }
    }, [dice])


    //When the die is clicked it changes it's state from not held ot being held.
    //Here we change the color of the die to #59E691
    function holdChanges(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld: !(die.isHeld)} : die
        }))
    }

    function generateNewDie() {
        return ({
            value: Math.ceil(Math.random() * 6),
            id: nanoid(),
            isHeld: false
        }

        )
    }
    function allNewDice() {
        const newDice = [];
        for(let i = 0 ; i < 10 ; i++)
            newDice.push(generateNewDie()   );

        return newDice;
    }

    const diceElements = dice.map(die => 
            <Die key={die.id} 
                 value={die.value} 
                 isSelected={die.isHeld} 
                 handleChanges={() => holdChanges(die.id)} 
            />);

    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
                return(
                    die.isHeld ? die : generateNewDie()
                )
                //If a die is held meaning clicked and turned to green then we don't change it's state
                //Otherwise we generate a new number for that die
        }));
    }

    return (
        <main className="main">
            {tenzies && <Confetti />}
            <Description />
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="roll-btn">
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}

export default Main;