import React from 'react';
import './App.css';
import './Menu.css';
import { Link } from 'react-router-dom';


function StartMenu({ onSelectDifficulty }) {
    return (
        <div className="start-menu">
            <h1>Flag Frenzy Quiz</h1>
            <h2>Select Difficulty:</h2>
            <div className='select-diff'>
                <button onClick={() => onSelectDifficulty('easy/normal')}>Easy/Normal</button>
                <button onClick={() => onSelectDifficulty('hard')}>Hard</button>
                <button onClick={() => onSelectDifficulty('extreme')}>Extreme</button>
                <button onClick={() => onSelectDifficulty('impossible')}>Impossible</button>
            </div>
            <Link to="/gallery">
                <button>Go to Gallery</button>
            </Link>
            <Link to="/SubQuiz">
                <button>SubNations</button>
            </Link>
        </div>
    );
}
export default StartMenu;