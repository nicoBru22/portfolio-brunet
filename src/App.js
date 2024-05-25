import React from 'react';

import AppRoutes from '../src/routes/routes';
import MetaData from './components/MetaData';

import './App.css';

function App() {
  return (
    <div className="App">
      <MetaData />
      <AppRoutes />
    </div>
  );
}

export default App;
