import fs from 'node:fs'
import path from 'node:path'

import dotenv from 'dotenv'
import cors from 'cors'

import express from 'express'
import { createClientAndConnect } from './db'

// @ts-ignore
import { render } from '../client/dist/ssr/entry-server.cjs'

dotenv.config()

export async function createServer(
  hmrPort = void 0
){
  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001
  const resolve = (p: string) => path.resolve(__dirname, p)

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
  createClientAndConnect()
})
