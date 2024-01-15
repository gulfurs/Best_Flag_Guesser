import React from 'react';
import './App.css';
import './Menu.css';
import Carousel from './Carousel';


function StartMenu({ onSelectDifficulty }) {
    return (
        <div className="start-menu">
            <h1>Flag Frenzy Quiz</h1>
            {/* <img src="my-app\src\AUS.png" alt="AUS" /> */}
            {/* <Carousel /> */}
            <h2>Select Difficulty:</h2>
            <div className='select-diff'>
                <button onClick={() => onSelectDifficulty('easy/normal')}>Easy/Normal</button>
                <button onClick={() => onSelectDifficulty('hard')}>Hard</button>
                <button onClick={() => onSelectDifficulty('extreme')}>Extreme</button>
                <button onClick={() => onSelectDifficulty('impossible')}>Impossible</button>
            </div>
        </div>
    );
}
export default StartMenu;