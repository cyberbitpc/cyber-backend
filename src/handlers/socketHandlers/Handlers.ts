import { Server, Socket } from 'socket.io'
import { handleChatMessage } from './chatHandler.js'

const setupSocketHandlers = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`${socket.id} user connected`)

    socket.on('disconnect', () => {
      console.log(`${socket.id} user disconnected`)
    })

    socket.on('chatMessage', (message: string) => {
      handleChatMessage(socket, message)
    })
  })
}

export default setupSocketHandlers
