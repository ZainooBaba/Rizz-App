import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { createRizzResponse } from './rizzLogic.js';

function App() {
  const [userName, setUserName] = useState('');

  const handleChange = (event) => {
    setUserName(event.target.value);
  }

  const handleClick = () => {
      var rizzResponse = createRizzResponse(userName);
        alert(rizzResponse);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>The Rizz App</h1>
       <font size="5">Need Help With The Ladies/Gents? Try The Rizz App</font>
       <input type="text" value={userName} onChange={handleChange} />
       <button onClick={handleClick}>Enter</button>
      </header>
    </div>
  );
}

export default App;