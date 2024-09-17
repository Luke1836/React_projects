import React, {useState} from "react";

function Players({initialName, symbol, isActive, onChangeName})
{
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit()
    {
        setIsEditing(prevState => !prevState)
        if(isEditing)
            onChangeName(symbol, name);
    }

    function handleChange(event)
    {
        setName(event.target.value);
    }

    let playerName = isEditing ? <input type="text" required value={name} onChange={handleChange}/> : <span className="player-name">{ name }</span>;

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                { playerName }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={ handleEdit }>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Players;