import React, { useState } from "react";

export default function UserInputs()
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
                [inputIdentifier]: newValue
            })
        })
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required onChange={(event) => handleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required onChange={(event) => handleChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required onChange={(event) => handleChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required onChange={(event) => handleChange('duration', event.target.value)} />
                </p>
            </div>
        </div>
    )
}