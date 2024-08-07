import React, { useState, useEffect } from 'react';
import US_State_Flags from './US_State_Flags';
import './App.css';

function QuizPage() {
  const [question, setQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const matchingPair = US_State_Flags[Math.floor(Math.random() * US_State_Flags.length)];
    const distractors = US_State_Flags
      .filter(US_State_Flag => US_State_Flag !== matchingPair)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [matchingPair, ...distractors].sort(() => Math.random() - 0.5);
    setQuestion({
      image: matchingPair.image,
      options: options,
      correctAnswer: matchingPair.name
    });
    setUserAnswer('');
    setFeedback('');
  };

  const handleAnswerSelect = (selectedName) => {
    setUserAnswer(selectedName);
    if (selectedName === question.correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Try again!');
    }
  };

  return (
    <div className='score-section'>
      <h1>US State Quiz</h1>
      <div className='image-container'>
        <img src={question.image} alt="Subnation Flag" />
      </div>
      {question.options && (
        <div className='answers-container'>
          {question.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSelect(option.name)}>{option.name}</button>
          ))}
        </div>
      )}
      <div className='answers-container'>
        {feedback && <p>{feedback}</p>}
      </div>
      <button onClick={generateQuestion}>Next Question</button>
    </div>
  );
}

export default QuizPage;
