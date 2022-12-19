import mongoose from 'mongoose';

export type NoID<T> = Omit<T, '_id'>;
export type ID = mongoose.Types.ObjectId | string;
