import React, { useState } from 'react';
import './App.css';
import { createRizzResponse } from './rizzLogic.js';

function App() {
  const [userName, setUserName] = useState('');
  const [rizzResponse, setRizzResponse] = useState('');

  const handleChange = (event) => {
    setUserName(event.target.value);
  }

  const handleClick = () => {
    const response = createRizzResponse(userName);
    setRizzResponse(response);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Rizzer-9000</h1>
        <p className="tagline">Need Help With The Ladies/Gents? Try The <i>Rizzer-9000</i>! Enter Their Name to Get Started!</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a name"
            value={userName}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Enter</button>
        </div>
        {rizzResponse && (
          <div className="response-container">
            <p className="response">{rizzResponse}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
