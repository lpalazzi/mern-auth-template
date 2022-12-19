import mongoose from 'mongoose';

export interface IUser {
  _id: mongoose.Types.ObjectId;
  email: string;
  passwordHash: string;
  name: {
    first: string;
    last: string;
  };
}

export interface IUserSignupDTO extends Omit<IUser, '_id' | 'passwordHash'> {
  password: string;
}

export interface IUserLoginDTO {
  email: string;
  password: string;
}

export interface IUserReturnDTO extends Omit<IUser, 'passwordHash'> {}
