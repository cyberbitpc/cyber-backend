import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:5000/')

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const handleMessageSubmit = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, inputMessage])
      socket.emit('chatMessage', inputMessage)
      setInputMessage('')
    }
  }

  useEffect(() => {
    socket.on('chatMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      socket.off('chatMessage')
    }
  }, [])

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
      <button onClick={handleMessageSubmit}>Отправить</button>
    </div>
  )
}

export default Chat
