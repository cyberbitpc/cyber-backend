import mongoose, { Schema } from 'mongoose'
import { IUser } from '../interfaces/iUser.js'

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: false,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model<IUser>('User', userSchema)

export default User
