import React, { useState } from 'react';
import './App.css';
import './quizmenu.css'; 
import { Link } from 'react-router-dom';

function QuizMenu() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
  };

  return (
      <div className="quiz-menu">
          <h1>Select Your Quiz</h1>
          <div className="quiz-buttons-container">
              <Link to="/subnations-quiz">
                  <button className="quiz-button">Subnation Quiz</button>
              </Link>
              <Link to="/nations-quiz-list">
                  <button className="quiz-button">Nations Quiz</button>
              </Link>
              <div className="dropdown-container">
                  <button className="quiz-button dropdown-button" onClick={toggleDropdown}>
                      Specific Nations {dropdownVisible ? '▲' : '▼'}
                  </button>
                  {dropdownVisible && (
                      <div className="dropdown-content">
                          <Link to="/us-state-quiz">
                              <button className="dropdown-item">US State Flags Quiz</button>
                          </Link>
                          <Link to="/russia-quiz">
                              <button className="dropdown-item">Russian Federal Subjects Quiz</button>
                          </Link>
                          {/* Add more specific nation quizzes here */}
                      </div>
                  )}
              </div>
          </div>
      </div>
  );
}

export default QuizMenu;