import fs from 'node:fs'
import path from 'node:path'

import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'

import express from 'express'
import { startApp } from './app/config/db.config'
import { createClientAndConnect } from './db'
// @ts-ignore
import { render } from '../client/dist/ssr/entry-server.cjs'
import topicsRouter from './app/routers/topicsRouter'
import commentsRouter from './app/routers/commentsRouter'
import likesRouter from './app/routers/likesRouter'


dotenv.config()

export async function createServer(
  hmrPort = void 0
){
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001
  const resolve = (p: string) => path.resolve(__dirname, p)

  app.use('/api/topics', topicsRouter)
  app.use('/api/comments', commentsRouter)
  app.use('/api/likes', likesRouter)
  
  //createClientAndConnect()
  let template:string;

  const vite = await ( await import('vite') ).createServer({
    root : void 0,
    server: {
      middlewareMode: true,
      watch: {
        usePolling: true,
        interval: 100
      },
      hmr: {
        port: hmrPort
      }
    },
    appType: 'custom'
  })
  
  // use vite's connect instance as middleware
  app.use(vite.middlewares)
  app.use('/', express.static('../client/dist/client/'))
  
  app.get('/*', async (req, res) => {

    const result = render(req.originalUrl)
    template = fs.readFileSync(resolve('../client/dist/client/index.html'), 'utf-8')
    template = await vite.transformIndexHtml(req.originalUrl, template)
    const html = template.replace(`<div id="root"></div>`,`<div id="root">${result}</div>`)
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  })
  
  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
  })

  return { app, vite };
}

createServer().then( () => {
  createClientAndConnect().then(() => startApp())
})
