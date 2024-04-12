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
            <Link to="/Easy_normal_page">
                <button>Easy/Normal</button>
            </Link>
            <Link to="/Quizapp">
                <button>Hard</button>
            </Link>
            <Link to="/quiz?difficulty=extreme">
                <button>Extreme</button>
            </Link>
            <Link to="/quiz?difficulty=impossible">
                <button>Impossible</button>
            </Link>
            </div>
        <div className="link-buttons">
          <Link to="/gallery">
            <button>Go to Gallery</button>
          </Link>
          <Link to="/subquiz">
            <button>SubNations Quiz</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default StartMenu;