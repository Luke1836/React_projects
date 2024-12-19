import { useEffect, useState } from 'react';

const TIMER = 3000;

function ProgressBar({ timer })
{
    const [ remainingTime, setRemainingTime ] = useState(timer);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime(prevTIme => prevTIme - 10);
      }, 10);
    
      return () => {
        clearInterval(interval);
      }
    }, []);

    return (
        <progress value={ remainingTime } max={ TIMER } />
    )
}

export default ProgressBar;