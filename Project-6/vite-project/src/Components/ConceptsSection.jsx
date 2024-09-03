import { CORE_CONCEPTS } from "./data";
import Coreconcepts from "./Coreconcepts";

function ConcpetsSection() 
{
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((item) => <Coreconcepts {...item} key={item.title}/>)}
            </ul>
        </section>
    )
}

export default ConcpetsSection;