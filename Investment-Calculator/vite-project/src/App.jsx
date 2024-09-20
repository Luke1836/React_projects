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

    const isDurationValid = userInputs.duration >= 1 ? true : false;
    const isReturnRateValid = userInputs.expectedReturn > 0 ? true : false;
    const isAnnualInvestmentValid = userInputs.annualInvestment >= 100 ? true : false;


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
            { !isDurationValid && <p className="center"><span className="attention">!</span> The Duration (Maturity) cannot be zero or negative <span className="attention">!</span></p> }
            { !isAnnualInvestmentValid && <p className="center"><span className="attention">!</span> The Minimum Annual Investment should be 100 <span className="attention">!</span></p> }
            { !isReturnRateValid && <p className="center"><span className="attention">!</span> The Return can't be zero or negative <span className="attention">!</span></p> }
            { isDurationValid && isAnnualInvestmentValid && isReturnRateValid && <Results userInputs={userInputs} /> }
        </>
    )
}

export default App;