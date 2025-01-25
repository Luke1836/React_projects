import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

function Summary({ userAnswers })
{
    const skippedQuestions = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0])
    
    const skippedQuestionsPercentage = Math.round((skippedQuestions.length / QUESTIONS.length ) * 100.0);
    const correctAnswersPercentage = Math.round((correctAnswers.length / QUESTIONS.length ) * 100.0);
    const incorrectAnswerPercentage = 100 - skippedQuestionsPercentage - correctAnswersPercentage;

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Completed!</h2>

            <div id="summary-stats">
                <p>
                    <span className='number'>{ skippedQuestionsPercentage }%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{ correctAnswersPercentage }%</span>
                    <span className='text'>Answered correctly</span>
                </p>
                <p>
                    <span className='number'>{ incorrectAnswerPercentage }%</span>
                    <span className='text'>Answered Incorrectly</span>
                </p>
            </div>

            <ol>
                {
                    userAnswers.map((answer, index) => {
                        let cssStyles = 'user-answer';

                        if(answer === null)
                            cssStyles += ' skipped';
                        else if( answer === QUESTIONS[index].answers[0])
                            cssStyles += ' correct';
                        else
                            cssStyles += ' wrong';

                        return (
                            <li key={ index }>
                                <h3>{ index + 1}</h3>
                                <p className='question'>{ QUESTIONS[index].text }</p>
                                <p className={ cssStyles }>{ answer ?? 'Skipped' }</p>
                            </li>
                        )
                    })    
                }
            </ol>
        </div>
    )
}

export default Summary;