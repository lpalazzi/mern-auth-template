import express from 'express';
import { errorResponder } from './middlewares';
import { users } from './controllers';

const app = express.Router();

// controllers
users(app);

// middlewares
app.use(errorResponder);

export default app;
