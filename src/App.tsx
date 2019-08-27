import React from 'react';
import './App.css';
// import SearchStarWars from './StarWars/Components/Section/SearchStarWars';
import TitleFilms from './StarWars/Components/Section/TitleFilms';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TitleFilms />
      </header>
    </div>
  );
}

export default App;
