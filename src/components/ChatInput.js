import React, { useState } from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import firebase from 'firebase/compat/app';
import { db } from '../firebase';

function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        
        if(!channelId){
            return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            messages: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Nemanja Radivojevic",
            userImage: ''
        })

        setInput('');
    }

  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
            <Button hidden type="submit" onClick={sendMessage}>Send</Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form{
        position: relative;
        display: flex;
        justify-content: center;

        > input{
            position: fixed;
            bottom: 30px;
            width: 60%;
            border: 1px solid gray;
            border-radius: 3px;
            padding: 20px;
            outline: none;
        }

        > button{
            display: none !important;
        }
    }
`