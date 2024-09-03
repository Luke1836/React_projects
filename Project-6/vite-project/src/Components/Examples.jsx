import { EXAMPLES } from "./data";
import TabButton from "./TabButton";
import React, {useState} from "react";

function Examples()
{
    const [selectedTab, setSelectedTab] = useState()

    function handleChanges(tab) {
        setSelectedTab(tab);
    }

    return (
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
    )
}

export default Examples;