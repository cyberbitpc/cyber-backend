import mongoose, { Schema } from 'mongoose'
import { IMessage } from '../interfaces/IMessage.js'

const messageSchema: Schema<IMessage> = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

// Создание индекса на поле 'user'
messageSchema.index({ user: 1 })

const Message = mongoose.model<IMessage>('Message', messageSchema)

export default Message
