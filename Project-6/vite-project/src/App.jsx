import React, {useState} from "react";
import Header from "./Components/Header";
import Coreconcepts from "./Components/Coreconcepts";
import { CORE_CONCEPTS } from "./Components/data.js"; 
import TabButton from "./Components/TabButton.jsx";

export default function App()
{
    const [selectedTab, setSelectedTab] = useState("Please click a button.")

    function handleChanges(tab) {
        setSelectedTab(tab);
        console.log(selectedTab);
        
    }

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
                        <TabButton handleChanges={() => handleChanges('components')}>Components</TabButton>
                        <TabButton handleChanges={() => handleChanges('jsx')}>JSX</TabButton>
                        <TabButton handleChanges={() => handleChanges('props')}>Props</TabButton>
                        <TabButton handleChanges={() => handleChanges('state')}>State</TabButton>
                    </menu>
                    <div id="tab-content">
                        
                    </div>
                </section>
            </main>
        </div>
    );
}