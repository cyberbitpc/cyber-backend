// import Message from '../models/Message';

// export const processMessage = (message: string) => {
//   // Обработка сообщения, например вызов ChatGPT и получение ответа
//   // Сохранение сообщения в базе данных или другое место хранения
//   // const newMessage = new Message({ content: message })
//   // newMessage.save()
// }

// import Message from '../models/Message';
// import ChatGPTService from '../../services/ChatGPTService'

// export const processMessage = async (message: string) => {
//     try {
//         const chatGPTService = new ChatGPTService();
//         const response = await chatGPTService.generateResponse(message);
//
//         // Обработка полученного ответа, например, сохранение в базу данных
//         const newMessage = new Message({ content: message, response });
//         await newMessage.save();
//
//         // Другие действия с ответом...
//
//         return response;
//     } catch (error) {
//         console.error('Error processing message:', error);
//         throw error;
//     }
// };

import Message from '../models/message.js'
import ChatGPTService from '../services/chatGPT.js'

export const processMessage = async (message: string) => {
  try {
    const chatGPTService = new ChatGPTService('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')
    const response = await chatGPTService.generateResponse(message)
    console.log(response)

    // Обработка полученного ответа, например, сохранение в базу данных
    // const newMessage = new Message({ content: message, response })
    // await newMessage.save()

    // Другие действия с ответом...

    return response
  } catch (error) {
    console.error('Error processing message:', error)
    throw error
  }
}
