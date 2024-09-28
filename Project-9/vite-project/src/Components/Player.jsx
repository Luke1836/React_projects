import { useState } from 'react' 

export default function Player() 
{
    const [playerName, setPlayerName] = useState('')
    return (
      <section id="player">
        <h2>Welcome { playerName ? playerName : 'Unknown Entity'}</h2>
        <p>
          <input type="text" value={playerName} placeholder='Enter your name'/>
          <button>Set Name</button>
        </p>
      </section>
    );
  }  