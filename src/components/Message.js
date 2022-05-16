import React from 'react'
import styled from 'styled-components';

function Message({ id, messages, timestamp, user, userImage }) {
  return (
    <MessageContainer>
        <img src={userImage} alt="" />
        <MessageInfo>
          <h4>
            {user}{' '}
                {/* <span>{new Date(timestamp?.toDate().toUTCString())}</span> */}
            <span>Datum</span>
          </h4>
          <p>{messages}</p>
        </MessageInfo>
    </MessageContainer>
  )
}

export default Message

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 450px){
     padding: 10px;    }

  > img {
    height: 50px;
    border-radius: 8px;

    @media screen and (max-width: 450px){
      display: none;
    }
  }
`

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`