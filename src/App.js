import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import StartMenu from './Menu';
import QuizMenu from './QuizMenu';
import QuizPage from './QuizPage';

// Import the data for different quizzes
//import { Allnations } from './All_nations';
import Allnations from "./Data/All_nations_metadata.json";

import { subnations } from './All_subnations';
import { Russia_flags } from './Russia_flags';
import { US_State_Flags } from './US_State_Flags';
import { Brazil_flags } from './Brazil_flags';
import { Japan_flags } from './Japan_flags';

function App() {
  return (
    <Router>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/quiz-menu'>Quizzes</Link>
        <Link to='/gallery'>Gallery</Link>
      </div>
      <div className='container'>
        <Routes>
          <Route path='/' element={<StartMenu />} />
          <Route path='/quiz-menu' element={<QuizMenu />} />
          <Route path='/gallery' element={<Gallery />} />

          {/* Routes for each quiz, passing the appropriate data */}
          <Route path='/nation-quiz' element={<QuizPage title="All Nations Quiz" flags={Allnations} />} />
          <Route path='/subnations-quiz' element={<QuizPage title="Subnations Quiz" flags={subnations} />} />
          <Route path='/us-state-quiz' element={<QuizPage title="US State Flags Quiz" flags={US_State_Flags} />} />
          <Route path='/russia-quiz' element={<QuizPage title="Russian Federal Subjects Quiz" flags={Russia_flags} />} />
          <Route path='/brazil-quiz' element={<QuizPage title="Brazilian State Flags Quiz" flags={Brazil_flags} />} />
          <Route path='/japan-quiz' element={<QuizPage title="Japanese Prefecture Flags Quiz" flags={Japan_flags} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
