import React from 'react';
import './App.css';
import './Menu.css';


function StartMenu({ onSelectDifficulty }) {
    return (
        <div className="start-menu">
            <h1>Welcome to FLAG_GUESSER</h1>
            <h2>Select Difficulty:</h2>
            <button onClick={() => onSelectDifficulty('easy/normal')}>Easy/Normal</button>
            <button onClick={() => onSelectDifficulty('hard')}>Hard</button>
            <button onClick={() => onSelectDifficulty('extreme')}>Extreme</button>
            <button onClick={() => onSelectDifficulty('impossible')}>Impossible</button>
        </div>
    );
}
export default StartMenu;