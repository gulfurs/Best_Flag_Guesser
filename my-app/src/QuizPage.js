import React from 'react';
import './App.css';
import './Menu.css';
import { Link } from 'react-router-dom';

function QuizPage() {
  return (
    <div className="start-menu">
      <h2>Select Your Quiz:</h2>
      <div className='link-buttons'>
        <Link to="/NationQuiz">
          <button>All Nations</button>
        </Link>
        <Link to="/US_StateQuiz">
          <button>US State Flags</button>
        </Link>
        <Link to="/SubQuiz">
          <button>All Subnations</button>
        </Link>
        <Link to="/RussiaQuiz">
          <button>Russia flags</button>
        </Link>
      </div>
    </div>
  );
}

export default QuizPage;
