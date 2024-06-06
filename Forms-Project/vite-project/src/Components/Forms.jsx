import React, {useState} from "react";

function Forms()
{

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
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
            return;
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
                
                <button className="form-submit">
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Forms;