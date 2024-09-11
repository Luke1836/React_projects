import React from "react";

function Tabs({ children, buttons })
{
    return (
        <>
            <menu>{ buttons }</menu>
            { children }
        </>
    )
}   

export default Tabs;