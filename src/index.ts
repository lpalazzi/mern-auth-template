import express from 'express';
import 'reflect-metadata';
import 'module-alias/register';
import config from '@config';
import * as loaders from './loaders';

async function start() {
  const app = express();
  await loaders.load(app);

  app.listen(config.port, () => {
    console.log(
      `[server]\t Server is running at http://localhost:${config.port}`
    );
  });
}

start();
