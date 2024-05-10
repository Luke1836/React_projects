import React from "react";
import './App.css';
import Card from './Components/Card.jsx'
import database from './Database/info.js'

function App() {
    
    const dataElements = database.map((item) => {
        return <Card 
                    key={item.id} 
                    {...item} 
                />
    });

    return (
        <>
            {dataElements}
        </>
    );
}

export default App;












/*  <div className="card">
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
    </div> */