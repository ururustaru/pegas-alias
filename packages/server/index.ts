import dotenv from 'dotenv'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
dotenv.config()

// @ts-ignore
import { render } from '../client/dist/ssr/entry-server.cjs'

import express from 'express'
import { createClientAndConnect } from './db'

const app = express()
app.use(cors())
const port = Number(process.env.SERVER_PORT) || 3001

createClientAndConnect()

app.get('/', (_, res) => {
  res.json('it works!')
})

app.get('/ssr-example', (req, res) => {
  const result = render(req.originalUrl)
  res.send(result)
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
