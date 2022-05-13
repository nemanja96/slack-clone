import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { login } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
      <div className="app">
        {!user ? <Login /> :
          <>
          <Header />
          <AppBody>
            <Sidebar />
            <Chat />
            {/* <Routes>
              <Route path="/" exact />
            </Routes> */}
          </AppBody>
        </>}
      </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`