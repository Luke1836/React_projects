import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="image_sec">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="description">
                <h1>{props.name}</h1>
                <p>
                    <h2>Occupation: {props.occupation}</h2>
                    <h2>Salary: {props.salary}</h2>
                </p>
            </div>
        </div>
    );
}

export default Card;