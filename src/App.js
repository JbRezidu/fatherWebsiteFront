import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import CustomRouter from './components/CustomRouter';
import CustomAppBar from './components/CustomAppBar';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomAppBar />
        <div className="main-container">
          <CustomRouter />
        </div>
      </div>
    </Router>
  );
}

export default App;
