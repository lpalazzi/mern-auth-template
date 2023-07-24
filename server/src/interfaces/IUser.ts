import mongoose from 'mongoose';
import { Name, UserRole } from 'types';

export interface IUser {
  _id: mongoose.Types.ObjectId;
  email: string;
  passwordHash: string;
  name: Name;
  role?: UserRole;
}

export interface IUserSignupDTO {
  email: string;
  name: Name;
  password: string;
}

export interface IUserLoginDTO {
  email: string;
  password: string;
}

export interface IUserReturnDTO extends Omit<IUser, 'passwordHash'> {}
