import mongoose, { Document } from 'mongoose'

export interface IMessage extends Document {
  user: mongoose.Schema.Types.ObjectId
  content: string
  timestamp: Date
}
