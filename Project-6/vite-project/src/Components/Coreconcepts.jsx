import React from "react";

function Coreconcepts(props) 
{
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

export default Coreconcepts;