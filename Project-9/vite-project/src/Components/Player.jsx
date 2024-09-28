import { useState } from 'react' 

export default function Player() 
{
    const [playerName, setPlayerName] = useState('')
    const [state, setState] = useState(false);

    function handleChange(event)
    {
        setState(false)
        setPlayerName(event.target.value)
    }

    function handleClick()
    {
        setState(true)
    }

    return (
      <section id="player">
        <h2>Welcome { state ? `${playerName}!` : 'Player1!'}</h2>
        <p>
          <input type="text" value={playerName} placeholder='Enter your name' onChange={handleChange}/>
          <button onClick={ handleClick }>Set Name</button>
        </p>
      </section>
    );
  }  