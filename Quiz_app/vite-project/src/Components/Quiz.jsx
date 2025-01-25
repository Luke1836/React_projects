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
      <div>
        <h3>Welcome to Your Ultimate Front-End Quiz platform</h3>
        <div className='underline'></div>
        Challenge your knowledge and refine your expertise with our dedicated quiz platform, crafted specifically for front-end developers and web enthusiasts. Dive deep into your chosen technology stack, with a special emphasis on React, and gain a clear understanding of your proficiency. As a proud non-profit initiative, we offer this platform completely free of charge, ensuring an accessible and enjoyable learning experience for all. Embark on your journey of quizzing today and unlock your true potential in web development!
      </div>
      <button className='start' onClick={ handleStartQuiz }>
        Start Quiz
      </button>
    </div>
  );
}