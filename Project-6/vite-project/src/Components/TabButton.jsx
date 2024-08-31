import React from "react";

function TabButton(props) {
    return (
        <li>
            <button className={props.isSelected ? 'active' : ''} onClick={props.handleChanges}>{props.children}</button>
        </li>
    )
}

export default TabButton;