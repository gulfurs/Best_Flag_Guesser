import React, { useState } from 'react';
import './App.css';

import { data } from './data';
import { easy_normalData } from './easy_normalData';
import { hardData } from './hardData';
import { extremeData } from './extremeData';
import { impossibleData } from './impossibleData';

import StartMenu from './Menu';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [restartGame, setRestartGame] = useState(false);

  // Randomize the order of the photos and answer options
  const shuffledData = data.sort(() => Math.random() - 0.5);
  const shuffledAnswers = shuffledData[currentQuestion].answers.sort(() => Math.random() - 0.5);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < 20) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartButtonClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedDifficulty('');
    setRestartGame(true);
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setRestartGame(false);
  };

  const getCurrentData = () => {
    let dataToUse;
    switch (selectedDifficulty) {
      case 'easy/normal':
        dataToUse = easy_normalData;
        break;
      case 'hard':
        dataToUse = hardData;
        break;
      case 'extreme':
        dataToUse = extremeData;
        break;
      case 'impossible':
        dataToUse = impossibleData;
        break;
      default:
        dataToUse = [];
        break;
    }
    return dataToUse.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="container">
      {selectedDifficulty === '' || restartGame ? (
        <StartMenu onSelectDifficulty={handleDifficultySelect} />
      ) : (
        <>
          {showScore ? (
            <div className="score-section">
              <h1>You scored {score} out of 20</h1>
              <button onClick={handleRestartButtonClick}>Restart</button>
            </div>
          ) : (
            <>
              <div className="image-container">
                <img src={getCurrentData()[currentQuestion].image} alt="Question" />
              </div>
              <div className="answers-container">
                <ul>
                  {getCurrentData()[currentQuestion].answers.map((answer, index) => (
                    <li key={index} onClick={() => handleAnswerButtonClick(answer.isCorrect)}>
                      {answer.text}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );

  
}

export default App;
