import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
      <div className="app">
          <Header />
          <AppBody>
            <Sidebar />
            <Chat />
            {/* <Routes>
              <Route path="/" exact />
            </Routes> */}
          </AppBody>
      </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`