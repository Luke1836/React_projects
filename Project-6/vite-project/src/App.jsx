import React, {useState} from "react";
import Header from "./Components/Header";
import Coreconcepts from "./Components/Coreconcepts";
import { CORE_CONCEPTS, EXAMPLES } from "./Components/data.js"; 
import TabButton from "./Components/TabButton.jsx";

export default function App()
{
    const [selectedTab, setSelectedTab] = useState()

    function handleChanges(tab) {
        setSelectedTab(tab);
        
    }

    return (
        <>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((item) => <Coreconcepts {...item} key={item.title}/>)}
                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected = {selectedTab === 'components'} handleChanges={() => handleChanges('components')}>Components</TabButton>
                        <TabButton isSelected = {selectedTab === 'jsx'} handleChanges={() => handleChanges('jsx')}>JSX</TabButton>
                        <TabButton isSelected = {selectedTab === 'props'} handleChanges={() => handleChanges('props')}>Props</TabButton>
                        <TabButton isSelected = {selectedTab === 'state'} handleChanges={() => handleChanges('state')}>State</TabButton>
                    </menu>

                    {!selectedTab ? <p>Choose a topic to view</p> : 
                            <div id="tab-content">
                                <h2>{ EXAMPLES[selectedTab].title }</h2>
                                <p>{ EXAMPLES[selectedTab].description }</p>
                                <pre>
                                    <code>
                                        { EXAMPLES[selectedTab].code }
                                    </code>
                                </pre>
                            </div>
                    }
                </section>
            </main>
        </>
    );
}