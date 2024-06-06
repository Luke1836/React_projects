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
        
    }    

    function handleSubmit(event) {
        event.preventDefault();
        
    }

    return (
        <div className="formContainer">
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
                
                <button className="form--submit">
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Forms;