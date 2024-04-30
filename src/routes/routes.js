import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Projet1 from '../pages/Projet1';
import Projet2 from '../pages/Projet2';
import Projet3 from '../pages/Projet3';
import Projet4 from '../pages/Projet4';
import Projet5 from '../pages/Projet5';
import Projet6 from '../pages/Projet6'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio-brunet" element={<HomePage />} />
        <Route path='/portfolio-brunet/projet1' element={<Projet1 />} />
        <Route path='/portfolio-brunet/projet2' element={<Projet2 />} />
        <Route path='/portfolio-brunet/projet3' element={<Projet3 />} />
        <Route path='/portfolio-brunet/projet4' element={<Projet4 />} />
        <Route path='/portfolio-brunet/projet5' element={<Projet5 />} />
        <Route path='/portfolio-brunet/projet6' element={<Projet6 />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;