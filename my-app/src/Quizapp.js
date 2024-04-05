import React, { useState, useEffect } from 'react';
import './App.css';
// import { data } from './data';
import { easy_normalData } from './easy_normalData';
import { hardData } from './hardData';
import { extremeData } from './extremeData';
import { impossibleData } from './impossibleData';
import StartMenu from './Menu';

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [shuffledData, setShuffledData] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    if (selectedDifficulty === 'easy/normal') {
      setShuffledData(shuffleArray(easy_normalData));
    } else if (selectedDifficulty === 'hard') {
      setShuffledData(shuffleArray(hardData));
    } else if (selectedDifficulty === 'extreme') {
      setShuffledData(shuffleArray(extremeData));
    } else if (selectedDifficulty === 'impossible') {
      setShuffledData(shuffleArray(impossibleData));
    }
  }, [selectedDifficulty]);

  useEffect(() => {
    if (shuffledData.length > 0) {
      setShuffledAnswers(shuffleArray(shuffledData[currentQuestion]?.answers));
    }
  }, [shuffledData, currentQuestion]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

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

  const restartGame = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setSelectedDifficulty('');
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="container">
      {selectedDifficulty === '' ? (
        <StartMenu onSelectDifficulty={handleDifficultySelect} />
      ) : (
        <>
          {showScore ? (
            <div className="score-section">
              <h1>You scored {score} out of 20</h1>
              <button onClick={restartGame}>Restart</button>
            </div>
          ) : (
            <>
              {shuffledData.length > 0 ? (
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
              ) : (
                <p>Loading...</p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default QuizApp;
