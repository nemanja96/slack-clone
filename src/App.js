import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header';

function App() {
  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
  );
}

export default App;
