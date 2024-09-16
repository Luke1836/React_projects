import React, {useState} from "react";

function Players({initialName, symbol, isActive})
{
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName)

    function handleEdit()
    {
        setIsEditing(prevState => !prevState)
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