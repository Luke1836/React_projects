import React from "react";

export default function UserInputs({ userInputs, handleChange })
{
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" 
                        required 
                        onChange={(event) => handleChange('initialInvestment', event.target.value)}
                        value={userInputs.initialInvestment} 
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" 
                        required 
                        onChange={(event) => handleChange('annualInvestment', event.target.value)}
                        value={userInputs.annualInvestment}    
                    />
                </p>
            </div>
            
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" 
                        required 
                        onChange={(event) => handleChange('expectedReturn', event.target.value)} 
                        value={userInputs.expectedReturn}    
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" 
                        required 
                        onChange={(event) => handleChange('duration', event.target.value)} 
                        value={userInputs.duration}    
                    />
                </p>
            </div>
        </div>
    )
}