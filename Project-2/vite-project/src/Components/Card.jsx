import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="image_sec">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="description">
                <h1>{props.name}</h1>
                <div>
                    <h2>Occudivation: {props.occupation}</h2>
                    <h2>Salary: {props.salary}</h2>
                </div>
            </div>
        </div>
    );
}

export default Card;