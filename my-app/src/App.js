// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes instead of Switch
import QuizApp from './Quizapp';
import Gallery from './Gallery';
import StartMenu from './Menu';
import SubQuiz from './SubQuiz';

function App() {
  return (
  <Router>
      <div>
        <Link to='/Menu'>Home</Link>
        <Link to='/Quizapp'>Quizapp</Link>
        <Link to='/Gallery'>Gallery</Link>
        <Link to='/SubQuiz'>SubQuiz</Link>
      </div>
      <Routes>
        <Route path='/Menu' element={<StartMenu/>} />
        <Route path='/Quizapp' element={<QuizApp/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/SubQuiz' element={<SubQuiz/>} />
      </Routes>
      </Router>
  );
}

export default App;

