import React from 'react';
import './App.css';
import './Menu.css';
import { Link } from 'react-router-dom';
import Globe from './globe';

function StartMenu() {
    return (
        <div className="start-menu">
            <h1>Flag Frenzy Quiz</h1>
            <p className="undertitle-text">Test your knowledge of flags from around the world!</p>
            <div className="content-container">
                <div className='select-diff'>
                  <Link to="/gallery">
                      <button>Go to Gallery</button>
                  </Link>
                  <Link to="/quiz-menu">
                      <button>Go to Quiz Menu</button>
                  </Link>
                </div>
                <div className="globe-container">
                    <Globe /> 
                </div>
            </div>
        </div>
    );
}

export default StartMenu;
