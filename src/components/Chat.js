import React from 'react'
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from './ChatInput';

function Chat() {
  return (
    <ChatContainer>
        <>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#Room-name</strong>
                    </h4>
                    <StarBorderIcon />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon />
                        Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages></ChatMessages>
            <ChatInput  />
        </>
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4{
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;

        > .MuiSvgIcon-root{
            margin-left: 20px;
            font-size: 18px;
        }
    }
`

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;

        > .MuiSvgIcon-root{
            margin-right: 5px !important;
            font-size: 16px;
        }
    }
`
const ChatMessages = styled.div`

`