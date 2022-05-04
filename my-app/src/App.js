import React from 'react';
import Login from './components/Login';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
      <Login />
      </header>
    </div>
  );
}

export default App;