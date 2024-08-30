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
                        <Coreconcepts 
                            image={CORE_CONCEPTS[0].image}
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                        />
                        <Coreconcepts 
                            image={CORE_CONCEPTS[1].image}
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                        />
                        <Coreconcepts 
                            image={CORE_CONCEPTS[2].image}
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                        />
                        <Coreconcepts 
                            image={CORE_CONCEPTS[3].image}
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                        />
                    </ul>
                </div>
            </main>
        </div>
    );
}