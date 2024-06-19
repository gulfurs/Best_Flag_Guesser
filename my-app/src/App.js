// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes instead of Switch
import QuizApp from './Quizapp';
import Gallery from './Gallery';
import StartMenu from './Menu';
import SubQuiz from './SubQuiz';
import NationQuiz from "./NationQuiz";
import Easy_normal_page from './Easy_normal_page';

function App() {
  return (
  <Router>
      <div className='nav-links'>
        <Link to='/Menu'>Home</Link>
        {/* <Link to='/Quizapp'>Quizapp</Link> */}
        <Link to='/Gallery'>Gallery</Link>
        <Link to='/SubQuiz'>SubQuiz</Link>
        <Link to='/NationQuiz'>NationQuiz</Link>
        {/* <Link to='/Easy_normal_page'>Easy_normal_page</Link> */}
      </div>
      <div className='container'>
      <Routes>
        <Route path='/Menu' element={<StartMenu/>} />
        {/* <Route path='/Quizapp' element={<QuizApp/>} /> */}
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/SubQuiz' element={<SubQuiz/>} />
        <Route path='/NationQuiz' element={<NationQuiz/>} />
        {/* <Route path='/Easy_normal_page' element={<Easy_normal_page/>} /> */}
      </Routes>
      </div>
      </Router>
  );
}

export default App;

