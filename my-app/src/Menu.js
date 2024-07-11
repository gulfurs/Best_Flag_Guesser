import React from 'react';
import './App.css';
import './Menu.css';
import { Link } from 'react-router-dom';

function StartMenu() {
    return (
     <div className="start-menu">
        <h1>Flag Frenzy Quiz</h1>
        <h2>Select Difficulty:</h2>
            <div className='select-diff'>
            <Link to="/NationQuiz">
                <button>All Nations</button>
            </Link>
            <Link to="/subquiz">
            <button>SubNations Quiz</button>
          </Link>
            </div>
        <div className="link-buttons">
          <Link to="/gallery">
            <button>Go to SubNations Gallery</button>
          </Link>
          
          <Link to="/US_StateQuiz">
                <button>US State Flags</button>
            </Link>
            <Link to="/RussiaQuiz">
                <button>Russian Flags</button>
            </Link>
        </div>
      </div>
    );
  }
  
  export default StartMenu;