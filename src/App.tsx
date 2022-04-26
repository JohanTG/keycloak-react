import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import './App.css';
import CharacterList from "./pages/character-list/CharacterList";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<CharacterList/>} />
              <Route path="characters" element={<CharacterList/>} />
            </Route>
          </Routes>
        </Router>
        <Counter />
      </header>
    </div>
  );
}

export default App;
