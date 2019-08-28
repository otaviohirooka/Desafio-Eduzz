import React from 'react';
import './App.css';

import Header from './StarWars/Components/Header/Header';
import Section from './StarWars/Components/Section/Section';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Section />
      </header>
    </div>
  );
}

export default App;
