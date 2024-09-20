import React, { useState } from "react";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";

function App()
{
    const [userInputs, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 10000,
        expectedReturn: 6,
        duration: 11
    });

    function handleChange(inputIdentifier, newValue)
    {
        setUserInput((prevUserInput) => {
            return ({
                ...prevUserInput,
                [inputIdentifier]: +newValue // Converts string into number 
            })
        });
    }

    return (
        <>
            <UserInputs userInputs={userInputs} handleChange={handleChange} />
            <Results userInputs={userInputs} />
        </>
    )
}

export default App;