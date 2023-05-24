import { Socket } from 'socket.io'
import { processMessage } from '../../controller/messageController.js'

export const handleChatMessage = async (socket: Socket, message: string) => {
  try {
    // Обработка сообщения
    const response = await processMessage(message)

    // Отправка ответа клиенту через сокет
    socket.emit('chatMessage', response)
  } catch (error) {
    console.error('Error handling chat message:', error)
  }
}

// export const handleTypingEvent = (socket: Socket, data) => {
//   // Логика обработки события "печатает" в чате
// }
//
// // socketHandlers/notificationHandler.js
// export const handleNotification = (socket: Socket, notification) => {
//   // Логика обработки уведомления
// }
//
// // socketHandlers/userHandler.js
// export const handleUserUpdate = (socket: Socket, user) => {
//   // Логика обновления данных пользователя
// }
