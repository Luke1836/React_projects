import React from "react";
import Header from "./Components/Header";
import Coreconcepts from "./Components/Coreconcepts";
import { CORE_CONCEPTS } from "./Components/data.js"; 

export default function App()
{
    return (
        <div>
            <Header />
            <main>
                <div id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <Coreconcepts {...CORE_CONCEPTS[0]} />
                        <Coreconcepts {...CORE_CONCEPTS[1]} />
                        <Coreconcepts {...CORE_CONCEPTS[2]} />
                        <Coreconcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </div>
            </main>
        </div>
    );
}