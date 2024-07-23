// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes instead of Switch
import US_StateQuiz from './US_StateQuiz';
import Gallery from './Gallery';
import StartMenu from './Menu';
import SubQuiz from './SubQuiz';
import NationQuiz from "./NationQuiz";
import RussiaQuiz from "./RussiaQuiz";
import QuizPage from "./QuizPage";

function App() {
  return (
  <Router>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/Gallery'>Gallery</Link>
        <Link to='/QuizPage'>Quizzes</Link>
        <Link to='/SubQuiz'>SubQuiz</Link>
        {/* <Link to='/NationQuiz'>NationQuiz</Link>
        <Link to='/US_StateQuiz'>US State Flags</Link>
        <Link to='/RussiaQuiz'>Russian Flags</Link> */}
      </div>
      <div className='container'>
      <Routes>
        <Route path='/' element={<StartMenu/>} />
        <Route path='/US_StateQuiz' element={<US_StateQuiz/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/SubQuiz' element={<SubQuiz/>} />
        <Route path='/NationQuiz' element={<NationQuiz/>} />
        <Route path='/RussiaQuiz' element={<RussiaQuiz/>} />
        <Route path='/QuizPage' element={<QuizPage/>} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;

