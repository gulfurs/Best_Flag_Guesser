import React, { useState, useEffect } from 'react';
import subnations from './All_subnations';

function QuizPage() {
  const [question, setQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const matchingPair = subnations[Math.floor(Math.random() * subnations.length)];
    const distractors = subnations
      .filter(subnation => subnation !== matchingPair)
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
    <div>
      <h1>Subnation Quiz</h1>
      <div>
        <img src={question.image} alt="Subnation Flag" />
      </div>
      {question.options && (
        <div>
          {question.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSelect(option.name)}>{option.name}</button>
          ))}
        </div>
      )}
      <div>
        {feedback && <p>{feedback}</p>}
      </div>
      <button onClick={generateQuestion}>Next Question</button>
    </div>
  );
}

export default QuizPage;
