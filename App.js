// src/App.js
import React from 'react';
import './App.css';

import AverageCalculator from './components/Average calculator';
import PrimeChecker from './components/PrimeChecker';
import FibonacciGenerator from './components/fibonacci gen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Math Microservices (Frontend Only)</h1>
      </header>
      
      <main>
        <div className="calculator-container">
          <AverageCalculator />
          <hr />
          <PrimeChecker />
          <hr />
          <FibonacciGenerator />
        </div>
      </main>

      <footer className="App-footer">
        <p>Created by Your Name</p>
      </footer>
    </div>
  );
}

export default App;
