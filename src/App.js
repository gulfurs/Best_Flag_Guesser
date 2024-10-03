import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Gallery from './Gallery';
import StartMenu from './Menu';
import QuizMenu from './QuizMenu';
import QuizPage from './QuizPage';

// Import the data for different quizzes
import { Allnations } from './All_nations';
import { subnations } from './All_subnations';
import { Russia_flags } from './Russia_flags';
import { US_State_Flags } from './US_State_Flags';

function App() {
  return (
    <Router>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/quiz-menu'>Quizzes</Link>
      </div>
      <div className='container'>
        <Routes>
          <Route path='/' element={<StartMenu />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/quiz-menu' element={<QuizMenu />} />

          {/* Routes for each quiz, passing the appropriate data */}
          <Route path='/nation-quiz' element={<QuizPage title="All Nations Quiz" flags={Allnations} />} />
          <Route path='/us-state-quiz' element={<QuizPage title="US State Flags Quiz" flags={US_State_Flags} />} />
          <Route path='/russia-quiz' element={<QuizPage title="Russian Federal Subjects Quiz" flags={Russia_flags} />} />
          <Route path='/subnations-quiz' element={<QuizPage title="Subnations Quiz" flags={subnations} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
