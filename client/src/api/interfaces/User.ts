import { ID, Name, UserRole } from 'types';

export interface IUserReturnDTO {
  _id: ID;
  email: string;
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
