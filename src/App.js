import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppRoutes from '../src/routes/routes';


function App() {
  return (
    <div className="App">
        <AppRoutes />
    </div>
  );
}

export default App;
