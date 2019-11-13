import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleCalculator from './components/simple-calculator';
import {Parent,Child} from  './components/parent-update-child';
import {Parent1} from  './components/child-update-parent';

function App() {
  return (
    <div className="App">
      {/* <SimpleCalculator>></SimpleCalculator> */}
      {/* <Parent></Parent> */}
      <Parent1></Parent1>
    </div>
  );
}

export default App;
