import { useState, useRef } from 'react' 

export default function Player() 
{
    const playerNameChange = useRef();
    const [playerName, setPlayerName] = useState('');

    function handleClick()
    {
        setPlayerName(playerNameChange.current.value)
        playerNameChange.current.value = ''
    }

    return (
      <section id="player">
        <h2>Welcome { playerName ? `${playerName}!` : 'Player1!'}</h2>
        <p>
          <input ref={ playerNameChange } type="text" placeholder='Enter your name' />
          <button onClick={ handleClick }>Set Name</button>
        </p>
      </section>
    );
  }  