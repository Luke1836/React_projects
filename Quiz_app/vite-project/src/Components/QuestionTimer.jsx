import { useState, useEffect } from "react";

function QuestionTimer({ timeout, onTimeout })
{
    const [ remainingTime, setRemainingTimer ] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTimer(prevRemainingTime => prevRemainingTime - 100)
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, [])
    
    return (
        <progress id="question-time" max={ timeout } value={ remainingTime } />
    )
}

export default QuestionTimer;