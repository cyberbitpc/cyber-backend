import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatPage from './pages/chat/ChatPage'
//
// import socketIOClient, { Socket } from 'socket.io-client'
// const socket: Socket = socketIOClient('http://localhost:5000/')

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  )
}

export default App
