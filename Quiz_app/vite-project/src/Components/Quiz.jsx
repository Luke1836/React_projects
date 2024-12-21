import { useState } from 'react';
import QUESTIONS from '../questions.js'
import TrophyIcon from '../assets/quiz-complete.png'

function Quiz()
{
    const [ userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = activeQuestionIndex ===  QUESTIONS.length;

    function handleSelectAnswer( selectedAnswer )
    {
        setUserAnswers(prevAnswers => ([ ...prevAnswers, selectedAnswer ]));
    }

    if(isQuizComplete)
    {
        return (
            <div id='summary'>
                <img src={ TrophyIcon } alt='Trophy Icon' />
                <h2>Quiz Complete</h2>
            </div>
        )
    }

    const shuffledAnswers = [ ...QUESTIONS[activeQuestionIndex].answers ];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }  // Shuffles the answers
    
    return (
        <div id="quiz">
            <div id='question'>
                <h2>{ QUESTIONS[activeQuestionIndex].text }</h2>
                <ul id='answers'>
                    { shuffledAnswers.map((answer) => 
                        (<li key={ answer } className='answer'>
                            <button onClick={() => handleSelectAnswer(answer) }>{ answer }</button>
                        </li>)
                    )}
                </ul>
            </div>
        </div>
        
    );
}

export default Quiz;