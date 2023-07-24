import express from 'express';
import * as controllers from './controllers';

const app = express.Router();

controllers.user(app);

export default app;
