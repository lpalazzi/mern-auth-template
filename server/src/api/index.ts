import express from 'express';
import { users } from './controllers';

const app = express.Router();

users(app);

export default app;
