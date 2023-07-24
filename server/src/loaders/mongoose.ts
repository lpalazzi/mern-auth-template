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
  try {
    await mongoose.connect(config.mongoUrl, {
      serverSelectionTimeoutMS: 5000,
    });
  } catch (error: any) {
    console.log('[database]\t ERROR: Could not connect to MongoDB');
    process.exit();
  }
};
