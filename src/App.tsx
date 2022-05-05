import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import CharacterListPage from "./pages/character-list/CharacterListPage";
import Character from "./pages/character/Character";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<CharacterListPage/>} />
              <Route path="characters" element={<CharacterListPage/>} />
              <Route path="/characters/:id" element={<Character/>} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>404 - There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
