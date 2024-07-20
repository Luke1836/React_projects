import React from "react";
import Die from "./Die";

function Main() {
    return (
        <main className="main">
            <div className="dice-container">
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
            </div>
        </main>
    )
}

export default Main;