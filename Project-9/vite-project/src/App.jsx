import Player from './Components/Player.jsx';
import TimerChallenge from './Components/TimerChallenge.jsx';

function App() 
{
  return (
    <>
      <Player />
      <div id="challenges">
          <TimerChallenge 
              title="Easy" 
              timerValue={ 2 } 
          />
          <TimerChallenge 
              title="Easy" 
              timerValue={ 4 } 
          />
          <TimerChallenge 
              title="Average" 
              timerValue={ 8 } 
          />
          <TimerChallenge 
              title="Hard"
              timerValue={ 20 } 
          />
      </div>
    </>
  );
}

export default App;
