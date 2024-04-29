import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Projet1 from '../pages/Projet1';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio-brunet" element={<HomePage />} />
        <Route path='/portfolio-brunet/projet1' element={<Projet1 />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;