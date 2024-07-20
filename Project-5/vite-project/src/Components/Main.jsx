import React from "react";
import Die from "./Die";

function Main() {
    return (
        <main className="main">
            <div className="dice-container">
                <Die value="1" />
                <Die value="2" />
                <Die value="3" />
                <Die value="4" />
                <Die value="5" />
                <Die value="6" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
            </div>
        </main>
    )
}

export default Main;