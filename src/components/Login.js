import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth, provider } from '../firebase';

function Login() {

    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithPopup(provider)
        .then(({user}) => {
            if(user){
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            }
        })
    }

  return (
    <div>
        <h1>Login</h1>
        <button onClick={loginToApp}>Login with Google</button>
    </div>
  )
}

export default Login