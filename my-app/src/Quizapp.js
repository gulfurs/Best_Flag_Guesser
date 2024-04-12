import React, { useState, useEffect } from 'react';
import './App.css';
import subnations from './All_subnations';
import easy_normalData from './easy_normalData';
import hardData  from './hardData';
import extremeData from './extremeData';
import impossibleData from './impossibleData';
import StartMenu from './Menu';

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    if (selectedDifficulty !== '') {
      generateQuestions(selectedDifficulty);
    }
  }, [selectedDifficulty]);

  const generateQuestions = (difficulty) => {
    const matchingPairs = subnations.filter(subnation => subnation.difficulty === difficulty);
    const shuffledPairs = shuffleArray(matchingPairs).slice(0, 20);
    setShuffledData(shuffledPairs);
    setCurrentQuestion(shuffledPairs[0]);
    setShowScore(false);
    setScore(0);
  };

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

    const nextQuestionIndex = currentQuestion.index + 1;
    if (nextQuestionIndex < 20) {
      setCurrentQuestion(shuffledData[nextQuestionIndex]);
    } else {
      setShowScore(true);
    }
  };

  const restartGame = () => {
    setSelectedDifficulty('');
  };

  return (
    <div className="container">
      {selectedDifficulty === '' ? (
        <StartMenu onSelectDifficulty={setSelectedDifficulty} />
      ) : (
        <>
          {showScore ? (
            <div className="score-section">
              <h1>You scored {score} out of 20</h1>
              <button onClick={restartGame}>Restart</button>
            </div>
          ) : (
            <>
              {currentQuestion && (
                <>
                  <div className="image-container">
                    <img src={currentQuestion.image} alt="Question" />
                  </div>
                  <div className="answers-container">
                    <ul>
                      {currentQuestion.options.map((option, index) => (
                        <li key={index} onClick={() => handleAnswerButtonClick(option.isCorrect)}>
                          {option.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default QuizApp;
