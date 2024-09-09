import React from "react";
import Header from "./Components/Header";
import ConcpetsSection from "./Components/ConceptsSection.jsx";
import Examples from "./Components/Examples.jsx";

export default function App()
{
    return (
        <>
            <Header />
            <main>
                <ConcpetsSection />
                <Examples />
            </main>
        </>
    );
}