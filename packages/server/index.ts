import fs from 'node:fs'
import path from 'node:path'

import cors from 'cors'

import express from 'express'
import { createClientAndConnect } from './db'
import * as http from 'http'
const iconv  = require('iconv-lite');
// @ts-ignore
import { render } from '../client/dist/ssr/entry-server.cjs'

export async function createServer(
  hmrPort = void 0
){
  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001
  const resolve = (p: string) => path.resolve(__dirname, p)

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
  
  app.use(vite.middlewares)
  
  app.use('/api/v1/desc/:word', async (req, res) => {
    let word = req.params.word;

    http.get('http://gramota.ru/slovari/dic/?bts=x&word=' + word, response => {
      let data: any[] = [];
      let teststring = '';

      response.on('data', chunk => {
        data.push(chunk);
        teststring = teststring + chunk;
      });

      response.on('end', () => {
        const dataHTML = iconv.decode(Buffer.concat(data),"cp1251").toString();
        const regex = new RegExp(/<div style="padding-left:50px">(.*)<br><br><\/div>/, 'gi')
        const regexDelimer = new RegExp(/<b>\d.<\/b>/, 'gi')
        const regexTag = new RegExp(/(<.*?>)/,'gi');
        const results = regex.exec(dataHTML);
        if (!results || !results[0]) {
          return;
        }
        
        let descs = results![0].replace(regexDelimer,'@@');
        descs = descs.replace(regexTag,'')
        let array: string[] = descs.split('@@');
        array.shift();
        const json = '{"word":"' + word + '","descriptions":' + JSON.stringify(array) + '}';
        res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(json)
      });
    }).on('error', err => {
      console.log('Error: ', err.message);
    });
  });

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
