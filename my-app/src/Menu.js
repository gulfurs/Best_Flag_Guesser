import React from 'react';
import './App.css';
import './Menu.css';
import { Link } from 'react-router-dom';

function StartMenu() {
    return (
     <div className="start-menu">
        <h1>Flag Frenzy Quiz</h1>
        <h2>Select Quiz:</h2>
            <div className='select-diff'>
            <Link to="/QuizPage">
            <button>Go Quiz page</button>
          </Link>
            </div>
        <div className="link-buttons">
          <Link to="/gallery">
            <button>Go to SubNations Gallery</button>
          </Link>
          
        </div>
      </div>
    );
  }
  
  export default StartMenu;