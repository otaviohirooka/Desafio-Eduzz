import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarWarsApi from "./StarWars/Components/Section/SearchStarWars";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <StarWarsApi />
      </header>
    </div>
  );
}

export default App;
