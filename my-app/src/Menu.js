import React from 'react';
import './App.css';
import './Menu.css';
import { Link } from 'react-router-dom';

function StartMenu() {
    return (
        <div className="start-menu">
            <h1>Flag Frenzy Quiz</h1>
            <div className='select-diff'>
              <Link to="/gallery">
                  <button>Go to Gallery</button>
              </Link>
              <Link to="/quiz-menu">
                  <button>Go to Quiz Menu</button>
              </Link>
            </div>
        </div>
    );
}

export default StartMenu;
