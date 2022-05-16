import React from 'react'
import { auth, provider } from '../firebase';
import slack from '../img/slack.png';
import styled from 'styled-components';

function Login() {

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }

  return (
    <div>
        <LoginContainer>
            <LoginInnerContainer>
                <img src={slack} />
                <button onClick={signIn}>Login with Google</button>
            </LoginInnerContainer>
        </LoginContainer>
    </div>
  )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const LoginInnerContainer = styled.div`
    padding: 70px 100px;
    text-align: center;
    background: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;

    > img {
        width: 150px;
        object-fit: contain;
    }

    > button{
        background: #0a8d48 !important;
        color: white !important;
        border: none !important;
        margin-top: 30px;
        padding: 15px 40px;
        border-radius: 5px;
        cursor: pointer;
        transition: .3s all;

        &:hover{
            opacity: 0.9;
        }
    }
`