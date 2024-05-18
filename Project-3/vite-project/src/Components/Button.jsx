import React from "react";

function Button(props) {
    return (
        <button type="button" className="generator" onClick={props.memeGenerator}>
            <span>Get a new meme image</span>
            <img src="../Public/Geneartor.png" />
        </button>
    )
}

export default Button;