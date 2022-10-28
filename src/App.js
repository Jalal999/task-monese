import './App.css';
import StartPage from './components/StartPage';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import GameBoard from './components/GameBoard';

function App() {
  const [players, setPlayers] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage setPlayers={setPlayers}/>} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </div>
  );
}

export default App;
