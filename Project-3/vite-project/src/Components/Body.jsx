import React from "react";

function Body() {
    return (
        <div className="hero">
            <div className="input-container">
                <div className="form">
                    <label htmlFor="ttext">Top Text</label>
                    <input type="text" placeholder="Enter" id="ttext" name="ttext" />
                </div>
                
                <div className="form">
                    <label htmlFor="btext">Bottom Text</label>
                    <input type="text" placeholder="Enter" id="btext" name="btext" />
                </div>
            </div>
        </div>
    );
}

export default Body;