import { useState } from 'react';
import QUESTIONS from '../questions.js'

function Quiz()
{
    const [ userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer( selectedAnswer )
    {
        setUserAnswers(prevAnswers => ([ ...prevAnswers, selectedAnswer ]));
    }
    
    return (
        <div id='question'>
            <h2>{ QUESTIONS[activeQuestionIndex].text }</h2>
            <ul id='answers'>
                { QUESTIONS[activeQuestionIndex].answers.map((answer) => 
                    (<li key={ answer } className='answer'>
                        <button onClick={() => handleSelectAnswer(answer) }>{ answer }</button>
                    </li>)
                )}
            </ul>
        </div>
    );
}

export default Quiz;