import TabButton from "./TabButton";
import React, {useState} from "react";
import Tabcontent from "./Tabcontent";
import Tabs from "./Tabs";

function Examples()
{
    const [selectedTab, setSelectedTab] = useState();

    function handleChanges(tab) {
        setSelectedTab(tab);
    }

    return (
            <section id="examples">
                <h2>Examples</h2>
                <Tabs 
                        buttonsContainer="menu"    
                        buttons={ 
                        <>
                            <TabButton isSelected = {selectedTab === 'components'} handleChanges={() => handleChanges('components')}>Components</TabButton>
                            <TabButton isSelected = {selectedTab === 'jsx'} handleChanges={() => handleChanges('jsx')}>JSX</TabButton>
                            <TabButton isSelected = {selectedTab === 'props'} handleChanges={() => handleChanges('props')}>Props</TabButton>
                            <TabButton isSelected = {selectedTab === 'state'} handleChanges={() => handleChanges('state')}>State</TabButton>
                        </>
                        }
                        children={ <Tabcontent selectedTab={selectedTab} /> }
                />
            </section>
    )
}

export default Examples;