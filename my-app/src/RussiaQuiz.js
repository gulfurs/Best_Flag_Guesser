import React, { useState, useEffect } from 'react';
import Russia_flags from './Russia_flags';
import './App.css';

function QuizPage() {
  const [question, setQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const matchingPair = Russia_flags[Math.floor(Math.random() * Russia_flags.length)];
    const distractors = Russia_flags
      .filter(Russia_flag => Russia_flag !== matchingPair)
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
      <h1>Russian federal subjects quiz</h1>
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
