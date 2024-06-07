import React, {useState} from "react";

function Forms()
{

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true,
        articleChosen: ""
    });


    function handleChange(event) {
        const {name, value, checked, type} = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }))
        console.log(formData)   //Checking
    }    

    function handleSubmit(event) {
        event.preventDefault();

        if(formData.password === formData.passwordConfirm)
            console.log("Passwords are matching");
        else {
            console.log("Passwords aren't matching");
            return; //If the passwords donot match
        }

        if(formData.joinedNewsletter)
            console.log("You have requested to join the newletter.");
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                    name="email"
                    onChange={handleChange}
                    value={FormData.email}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    className="form-input"
                    name="password"
                    onChange={handleChange}
                    value={FormData.password}
                />

                <input 
                    type="password"
                    placeholder="Confirm Password"
                    className="form-input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={FormData.passwordConfirm}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                
                <p>Choose a supplement</p>
                <fieldset>
                    <input
                        type="radio"
                        id="MetroPlus"
                        name="articleChosen"
                        value="MetroPlus"
                        onChange={handleChange}
                        checked={formData.articleChosen === "MetroPlus"}
                    />
                    <label htmlFor="MetroPlus">Metro Plus</label>
                    <br />

                    <input
                        type="radio"
                        id="FinancialTimes"
                        name="articleChosen"
                        value="FinancialTimes"
                        onChange={handleChange}
                        checked={formData.articleChosen === "FinancialTimes"}
                    />
                    <label htmlFor="FinancialTimes">Financial Times</label>
                    <br />

                    <input
                        type="radio"
                        id="BusinessPlus"
                        name="articleChosen"
                        value="BusinessPlus"
                        onChange={handleChange}
                        checked={formData.articleChosen === "BusinessPlus"}
                    />
                    <label htmlFor="FinancialTimes">Business Plus</label>
                    <br />

                    <input
                        type="radio"
                        id="PropertyPlus"
                        name="articleChosen"
                        value="PropertyPlus"
                        onChange={handleChange}
                        checked={formData.articleChosen === "PropertyPlus"}
                    />
                    <label htmlFor="PropertyPlus">Properties Plus</label>
                    <br />

                </fieldset>
                <br />
                <button className="form-submit">
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Forms;