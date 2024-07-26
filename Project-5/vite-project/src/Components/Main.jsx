import React, {useEffect, useState} from "react";
import Die from "./Die";
import Description from "./Description";
import Results from "./Results.jsx"
import {nanoid} from "nanoid";
import Confetti from "react-confetti"

function Main() {

    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);
    let time = 0; //Keeps check of the total time taken to complete the game in seconds
    let count = 0; //Counts the number of rolls taken to win the game

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if(allHeld && allSameValue) {
            setTenzies(true);   //If every die is selected and we got the same number, we win the game
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
        })
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
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return(
                    die.isHeld ? die : generateNewDie()
                )
                //If a die is held meaning clicked and turned to green then we don't change it's state
                //Otherwise we generate a new number for that die
        }));
        }
        else {
            setTenzies(false);
            setDice(allNewDice());
        }
    }

    return (
        <main className="main">
            {tenzies && <Confetti />}
            <Description />
            <div className="dice-container">
                {diceElements}
            </div>

            <Results result={tenzies} time={time} moves={count} />
            <button onClick={rollDice} className="roll-btn">
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}

export default Main;