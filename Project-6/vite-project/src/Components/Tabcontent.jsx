import { EXAMPLES } from "./data";

function Tabcontent(props)
{
    return (
        <>
            {!(props.selectedTab) ? <p>Choose a topic to view</p> : 
                <div id="tab-content">
                    <h2>{ EXAMPLES[props.selectedTab].title }</h2>
                    <p>{ EXAMPLES[props.selectedTab].description }</p>
                    <pre>
                        <code>
                            { EXAMPLES[props.selectedTab].code }
                        </code>
                    </pre>
                </div>
            }
        </>
    );
}

export default Tabcontent;