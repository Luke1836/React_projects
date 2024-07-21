import React from "react";

function Die(props) {
    const styles = {
        backgroundColor: props.isSelected ? "#59E391" : "white"
    }
    return (
        <div className="die-face" style={styles}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

export default Die;