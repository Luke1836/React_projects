import React from "react";
import Header from "./Components/Header";
import Coreconcepts from "./Components/Coreconcepts";

export default function App()
{
    return (
        <div>
            <Header />
            <main>
                <div id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <Coreconcepts 
                            image={componentsImage}
                            title="Title"
                            description="The core UI building block"
                        />
                    </ul>
                </div>
            </main>
        </div>
    );
}