import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage1 from './pages/LandingPage1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage1 />} />
      </Routes>
    </Router>
  );
}

export default App;
