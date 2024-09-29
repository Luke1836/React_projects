
function TimerChallenge({ title, timerValue })
{

    return (
        <section className="challenge">
            <h2>{ title }</h2>
            <p className="challenge-time">
                { timerValue } second{ timerValue > 1 ? 's' : ''}
            </p>
            <p>
                <button>
                    Start Challenge
                </button>
            </p>

            <p>
                TIme is running/ Timer Inactive (paused)
            </p>
        </section>
    )
}

export default TimerChallenge;