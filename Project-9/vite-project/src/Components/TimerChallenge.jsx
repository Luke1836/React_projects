import { useState, useRef } from "react";
import ResultsModal from "./ResultsModal";

function TimerChallenge({ title, timerValue })
{
    const timer = useRef();
    const [ timerStarted, setTimerStarted ] = useState(false);
    const [ timerExpired, setTimerExpired ] = useState(false);

    function handleTimerStart()
    {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            }, timerValue * 1000)

        setTimerStarted(true);
    }

    function handleTimerStop()
    {
        setTimerStarted(false);
        clearInterval(timer.current)
    }

    return (
        <>
            {timerExpired && <ResultsModal result='lost' targetTime={ timerValue } />}
            <section className="challenge">
                <h2>{ title }</h2>
                <p className="challenge-time">
                    { timerValue } second{ timerValue > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={ timerStarted ? handleTimerStop : handleTimerStart }>
                        { timerStarted ? 'Stop' : 'Start' } Challenge
                    </button>
                </p>

                <p className={ timerStarted ? 'active' : undefined}>
                    { timerStarted ? 'TImer is running' :  'Timer inactive' }
                </p>
            </section>
        </>
    )
}

export default TimerChallenge;