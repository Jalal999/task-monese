import './App.css';
import StartPage from './components/StartPage';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;
