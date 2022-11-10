import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

import { createClientAndConnect } from './db';

// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

// const _dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.SERVER_PORT) || 3001;

async function createServer() {
  // console.log(_dirname);
  const app = express();

  const vite = await createViteServer({
    server: {
      middlewareMode: true
    },
    appType: 'custom'
  });
  app.use(cors());
  app.use(vite.middlewares);

  createClientAndConnect();

  app.use('*', async (_, res) => {
    res.json('👋 Howdy from the server2 :)');
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: http://127.0.0.1:${port}`);
  });
}

createServer();