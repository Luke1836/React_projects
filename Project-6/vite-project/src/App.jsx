import React from "react";
import Header from "./Components/Header";
import Coreconcepts from "./Components/Coreconcepts";
import { CORE_CONCEPTS } from "./Components/data.js"; 
import TabButton from "./Components/TabButton.jsx";

export default function App()
{
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <Coreconcepts {...CORE_CONCEPTS[0]} />
                        <Coreconcepts {...CORE_CONCEPTS[1]} />
                        <Coreconcepts {...CORE_CONCEPTS[2]} />
                        <Coreconcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton>Components</TabButton>
                        <TabButton>JSX</TabButton>
                        <TabButton>Props</TabButton>
                        <TabButton>State</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}