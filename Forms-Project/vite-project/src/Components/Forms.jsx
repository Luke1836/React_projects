import React from "react";

function Forms()
{

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
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