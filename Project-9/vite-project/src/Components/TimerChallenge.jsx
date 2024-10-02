import { useState, useRef } from "react";
import ResultsModal from "./ResultsModal";

function TimerChallenge({ title, timerValue })
{
    const timer = useRef();
    const dialog = useRef();

    const [ timeRemaining, setTimeRemaining ] = useState(timerValue * 1000)

    const timerActive = timeRemaining > 0 && timeRemaining < (timerValue * 1000);
    if(timeRemaining <= 0)
    {
        clearInterval(timer.current);
        dialog.current.show();
        setTimeRemaining(timerValue * 1000);
    }

    function handleTimerStart()
    {
        timer.current = setInterval(() => {
            setTimeRemaining(prevRemainingTime => prevRemainingTime - 10)
        }, 10);
    }

    function handleTimerStop()
    {
        dialog.current.show();
        clearInterval(timer.current)
    }

    return (
        <>
            <ResultsModal ref={dialog} result='lost' targetTime={ timerValue } />
            <section className="challenge">
                <h2>{ title }</h2>
                <p className="challenge-time">
                    { timerValue } second{ timerValue > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={ timerActive ? handleTimerStop : handleTimerStart }>
                        { timerActive ? 'Stop' : 'Start' } Challenge
                    </button>
                </p>

                <p className={ timerActive ? 'active' : undefined}>
                    { timerActive ? 'TImer is running' :  'Timer inactive' }
                </p>
            </section>
        </>
    )
}

export default TimerChallenge;