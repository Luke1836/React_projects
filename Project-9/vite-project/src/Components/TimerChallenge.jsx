import { useState } from "react";

function TimerChallenge({ title, timerValue })
{
    const [ timerStarted, setTimerStarted ] = useState(false);
    const [ timerExpired, setTimerExpired ] = useState(false);

    function handleTimerStart()
    {
        setTimeout(() => {
            setTimerExpired(true)
        }, timerValue * 1000)

        setTimerStarted(prevState => !prevState);
    }
    return (
        <section className="challenge">
            <h2>{ title }</h2>
            <p className="challenge-time">
                { timerValue } second{ timerValue > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={ handleTimerStart }>
                    { timerStarted ? 'Stop' : 'Start' } Challenge
                </button>
            </p>

            <p className={ timerStarted ? 'active' : undefined}>
                { timerStarted ? 'TImer is running' :  'Timer inactive' }
            </p>
        </section>
    )
}

export default TimerChallenge;