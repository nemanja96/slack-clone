import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Spinner from 'react-spinkit';
import slack from './img/slack.png';

function App() {
  const [user, loading] = useAuthState(auth);

  if(loading){
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={slack} />
          <Spinner name='ball-spin-fade-loader' color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
      <div className="app">
        {!user ? (<Login />) :
        (
          <>
          <Header />
          <AppBody>
            <Sidebar />
            <Chat />
          </AppBody>
        </>
      )}
      </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

      > img {
        width: 150px;
        height: 150px;
        padding: 20px;
        margin-bottom: 40px;
    }
`