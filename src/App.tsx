import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './counter/Counter';
import { AppProviders } from './providers/AppProviders';
import { MuiMode } from './mui/MuiMode';

function App() {
  return (
    <AppProviders>

      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
