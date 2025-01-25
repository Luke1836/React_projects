import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.jsx';
import Question from './Question.jsx';


export default function Quiz() 
{
  const [userAnswers, setUserAnswers] = useState([]);
  const [ startQuiz, setStartQuiz ] = useState(false);


  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  function handleStartQuiz()
  {
    setStartQuiz(true);
  }

  // Results of the Quiz
  if( quizIsComplete ) 
  {
    return (
      <Summary userAnswers={ userAnswers }/>
    );
  }

  // Begin the Quiz
  if( startQuiz )
  {
    return (
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
        />
      </div>
    )
  }
  return (
    <div id='quiz'>
      <button className='start' onClick={ handleStartQuiz }>
        Start Quiz
      </button>
    </div>
  );
}