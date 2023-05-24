import * as express from 'express'
import * as http from 'http'
import * as socket from 'socket.io'
import * as mongoose from 'mongoose'
import bodyParser from 'body-parser'
import passport from 'passport'
import cors from 'cors'
import morgan from 'morgan'

import initializePassport from './middlware/passport.js'

import messageRoutes from './routes/message.js'

import keys from './config/keys.js'
import setupSocketHandlers from './handlers/socketHandlers/Handlers.js'

const app = express.default()

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected.'))
  .catch((error) => console.log(error))

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize())

initializePassport(passport)

app.use('/api/message', messageRoutes)

const server = http.createServer(app)

const io = new socket.Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
})

setupSocketHandlers(io)

// io.on('connection', (socket) => {
//   console.log(`${socket.id} user connected`)
//   socket.on('disconnect', () => {
//     console.log(`${socket.id} user disconnected`)
//   })
//
//   socket.on('message', (message) => {
//     socket.emit('message', 'Привет, мир!') // Отправка сообщения клиенту
//
//     console.log(message)
//   })
// })

export default server
