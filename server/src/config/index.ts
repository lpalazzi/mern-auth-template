export default {
  dev: process.env.DEV === '1' ?? 0,
  port: Number(process.env.PORT) ?? 8000,
  https: {
    key: process.env.HTTPS_KEY,
    cert: process.env.HTTPS_CERT,
    ca: process.env.HTTPS_CA,
  },
  mongoUrl: process.env.MONGODB_URL ?? 'mongodb://127.0.0.1/no_url',
  sessionSecret: process.env.SESSION_SECRET ?? 'no_secret',
};
