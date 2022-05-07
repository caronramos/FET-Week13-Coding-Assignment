import React from 'react';
import Login from './components/Login';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App" >
      <Navigation />
      <header className="App-header">
        <div style={{ backgroundImage: "url(/churhcenter.jpeg)", width:'400px', height:'400px', float: 'none'}}>
          <br></br><br></br>
          <Login />
        </div>
      </header>
    </div>
  );
}

export default App;