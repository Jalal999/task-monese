import './App.css';
import StartPage from './components/StartPage';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const [players, setPlayers] = useState({});

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage setPlayers={setPlayers} />} />
          <Route path="/game" element={<GameBoard players={players} />} />
          <Route path="/scoreboard" element={<Scoreboard players={players} />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
