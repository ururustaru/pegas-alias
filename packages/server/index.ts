import fs from 'node:fs'
import path from 'node:path'
import cors from 'cors'
import express from 'express'
import { createClientAndConnect } from './db'
// импортируем работу с запросами для сервера
import * as http from 'http'
// импортируем конвертер для кодировок т.к. удаленный сайт в window-1251
import iconv from 'iconv-lite'
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
  
  // слушаем апи по этому адресу, заносим все что после слеша в переменную word
  app.use('/api/v1/desc/:word', async (req, res) => {
    const word = req.params.word;
    // делаем запос к сайту с описанием
    http.get('http://gramota.ru/slovari/dic/?bts=x&word=' + word, response => {
      const data: Buffer[] = [];
      // ответ приходит кусками, записываем куски (Buffer) в массив чтобы потом преобразовать разом
      response.on('data', chunk => {
        data.push(chunk);
      });

      response.on('end', () => {
        // Когда всё что можно нам пришло, конвертируем из кодировки window-1251 и превращаем Буфер в строку
        const dataHTML = iconv.decode(Buffer.concat(data),"cp1251").toString();
        // Парсим (выбираем) нужные нам блок по фиксированным (на удаленном сайте) тегам
        const regex = new RegExp(/<div style="padding-left:50px">(.*)<br><br><\/div>/, 'gi')
        // Здесь описываем разделители вариантов объяснение вида <b>1.</b> (заменим их на @@ или любой другой разделить)
        const regexDelimer = new RegExp(/<b>\d.<\/b>/, 'gi')
        // Здесь описаны все теги, будем их вычищать
        const regexTag = new RegExp(/(<.*?>)/,'gi');
        // exec - возвращает соответсвие регулярному выражению (нужным нам блок на странице с которым будем работать дальше)
        const results = regex.exec(dataHTML);
        // убедимся что нам хоть что-то вернули)
        if (!results || !results[0]) {
          return;
        }
        // готовим поделить на блоки описаний, очищаем от тегов и загоняем разные варианты описания в массив
        let descs = results![0].replace(regexDelimer,'@@');
        descs = descs.replace(regexTag,'')
        const array: string[] = descs.split('@@');
        // первый элемент массива отбрасываем - там нет описания
        array.shift();
        // формируем и возрващаем строку json
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
