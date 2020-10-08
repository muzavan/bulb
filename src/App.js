import React from 'react';
import './App.css';

import BulbWrap from './BulbWrap.js';
import {generateCase, countStep, DEFAULT_MIN_NUMBER, DEFAULT_MAX_NUMBER} from './logic.js';

function App() {
  let bulbArr = generateCase(DEFAULT_MIN_NUMBER, DEFAULT_MAX_NUMBER);

  return (
    <div className="App">
      <center>
        <h3>Welcome to Bulb Game!</h3>
        <p>You can click on any bulb to switch it on/off!</p>
        <p>When you switch it, it will affect all the bulbs on the right as well!</p>
        <p>Goal: can you switch all bulbs to on with the steps required?</p>

      </center>

      <BulbWrap 
        maxSteps={countStep(bulbArr)}
        bulbArr={bulbArr} />
    </div>
  );
}

export default App;
