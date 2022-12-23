import mongoose from 'mongoose';
import config from 'config';

export default async () => {
  mongoose.connection.on('connected', () =>
    console.log('[database]\t Connected to MongoDB')
  );
  mongoose.connection.on(
    'error',
    console.error.bind(console, 'MongoDB connection error:')
  );
  await mongoose.connect(config.mongoUrl);
};
