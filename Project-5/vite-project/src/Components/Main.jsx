import React, {useEffect, useState} from "react";
import Die from "./Die";
import Description from "./Description";
import Results from "./Results.jsx"
import {nanoid} from "nanoid";
import Confetti from "react-confetti"

let time = 0; //Keeps check of the total time taken to complete the game in seconds
localStorage.setItem("NumberOfRolls", localStorage.getItem("NumberOfRolls") || 0);
let minMoves = localStorage.getItem("NumberOfRolls");

function Main() {

    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);
    const [count, setCount] = useState(0); //Counts the number of rolls taken to win the game

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if(allHeld && allSameValue) {
            setTenzies(true);   //If every die is selected and we got the same number, we win the game
        }
    }, [dice])

    useEffect(() => {
        if (tenzies) {
          if (count < localStorage.getItem("NumberOfRolls") || localStorage.getItem("NumberOfRolls") === '0') {
            localStorage.setItem("NumberOfRolls", count);
            minMoves = count;
          }
        }
      }, [tenzies, count]);

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
            newDice.push(generateNewDie());

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
            setCount(prevCount => prevCount = prevCount + 1);  //Increment count for each dice roll
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
            setCount(prevCount => prevCount = 0);
        }
    }


    return (
        <main className="main">
            {tenzies && <Confetti />}
            <Description />
            <div className="dice-container">
                {diceElements}
            </div>

            <Results flag={tenzies} time={time} moves={count} minMoves={minMoves} />
            <button onClick={rollDice} className="roll-btn">
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}

export default Main;