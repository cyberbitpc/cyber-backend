import React from 'react'
import Chat from '../../components/chat/Chat'

const ChatPage = ({ socket }: any) => {
  return (
    <div>
      <h1>ChatPage</h1>
      <Chat />
    </div>
  )
}

export default ChatPage
