import React from 'react'
import styled from 'styled-components';

function ChatInput() {
  return (
    <ChatInputContainer>
        <form>
            <input placeholder={`Message #1`} />
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
`