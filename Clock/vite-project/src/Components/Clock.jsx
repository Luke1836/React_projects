import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function Clock() {
    const [time, setTime] = useState(new Date());
    const [dayOrNight, setDayOrNight] = useState();
    const [backgroundColor, setBackgroundColor] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date()); 
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
        const hours = time.getHours();
        const formattedHours = hours % 12 || 12; 
        const ampm = hours >= 12 ? 'PM' : 'AM';

        if ((formattedHours > 6 && ampm === 'AM') || (formattedHours < 6 && ampm === 'PM')) {
            setDayOrNight(false);
            setBackgroundColor('#F26B0F'); 
        } else {
            setDayOrNight(true);
            setBackgroundColor('#001A6E'); 
        }
    }, [time]); 

    // Formatting the date
    const formatTime = () => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    };

    return (
        <div className='clock-container' style={{ backgroundColor: backgroundColor }}>
            <div className="clock">
                {formatTime()}
            </div>
            { dayOrNight ? <FontAwesomeIcon icon={faMoon} size="xl" style={{color: "#0650b7", padding:'6px'}} /> : <FontAwesomeIcon icon={faSun} size="xl" style={{color: "#ffc800",  padding:'6px'}} />}
        </div>
    );
}

export default Clock;