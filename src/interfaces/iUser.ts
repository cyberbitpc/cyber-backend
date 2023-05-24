import { Document } from 'mongoose'

export interface IUser extends Document {
  name?: string
  nickname: string
  registrationDate: Date
}
