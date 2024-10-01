import React from 'react';
import Quiz from './components/quiz'; // corrected path
import Navbar from './components/nav'; // corrected path
import Rest from './components/rest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/quiz" element={<Quiz />} /> 
        <Route path="/" element={<Rest />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
