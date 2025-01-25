import quizCompleteImg from '../assets/quiz-complete.png';

function Summary()
{
    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Completed!</h2>

            <div id="summary-stats">
            
            </div>
        </div>
    )
}

export default Summary;