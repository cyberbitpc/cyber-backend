import { Request, Response } from 'express'
import Message from '../routes/message.js'
import { RequestWithBody, RequestWithParams } from '../types/RequestTypes.js'

const db: {} = {
  messages: [{}],
}

export const sendMessage = async function (req: RequestWithBody<any>, res: Response) {}

export const getMessage = async (req: RequestWithParams<{ title: string }>, res: Response) => {
  return res.json({ id: 1, text: 'Hello' })
  // req.query.res.json({
  //   message: 'Hello',
  // })
}
