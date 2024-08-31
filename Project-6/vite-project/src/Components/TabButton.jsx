import React from "react";

function TabButton(props) {
    return (
        <li>
            <button onClick={props.handleChanges}>{props.children}</button>
        </li>
    )
}

export default TabButton;