import dotenv from 'dotenv';

dotenv.config();

export default {
  test: process.env.TEST === '1' ?? 0,
  port: process.env.PORT ?? '8000',
  mongoUrl: process.env.MONGODB_URL ?? 'mongodb://127.0.0.1/no_url',
  sessionSecret: process.env.SESSION_SECRET ?? 'no_secret',
};
