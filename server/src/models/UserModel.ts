import mongoose from 'mongoose';
import { IUser } from 'interfaces';

const UserSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    first: String,
    last: String,
  },
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
