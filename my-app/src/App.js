import React, { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // Randomize the order of the photos and answer options
  const shuffledData = data.sort(() => Math.random() - 0.5);
  const shuffledAnswers = shuffledData[currentQuestion].answers.sort(() => Math.random() - 0.5);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className="container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {shuffledData.length}
          <button onClick={restartGame}>Restart</button>
        </div>
      ) : (
        <>
          <div className="image-container">
            <img src={shuffledData[currentQuestion].image} alt="Question" />
          </div>
          <div className="answers-container">
            <ul>
              {shuffledAnswers.map((answer, index) => (
                <li key={index} onClick={() => handleAnswerButtonClick(answer.isCorrect)}>
                  {answer.text}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
