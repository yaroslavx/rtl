import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Skills } from './skills/Skills';

function App() {
  return (
    <div className="App">
      <Skills skills={['first', 'second', 'third']} />
    </div>
  );
}

export default App;
