import React from "react";

function TabButton(props) {
    return (
        <li>
            <button>{props.children}</button>
        </li>
    )
}

export default TabButton;