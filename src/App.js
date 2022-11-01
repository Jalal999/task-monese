import './App.css';
import StartPage from './components/StartPage';
import { useState, useMemo } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HistoryContext } from './context/historyContext';

function App() {
  const [players, setPlayers] = useState({});
  const [history, setHistory] = useState([{ players: {}, winner: '' }]);
  const providerValue = useMemo(() => ([history, setHistory]), [history, setHistory]);

  return (
    <Provider store={store}>
      <HistoryContext.Provider value={providerValue}>
        <div className="App">
          <Routes>
            <Route path="/" element={<StartPage setPlayers={setPlayers} />} />
            <Route path="/game" element={<GameBoard players={players} />} />
            <Route path="/scoreboard" element={<Scoreboard players={players} />} />
          </Routes>
        </div>
      </HistoryContext.Provider>

    </Provider>
  );
}

export default App;
