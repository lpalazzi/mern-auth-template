import { ID } from '@types';

export interface IUserReturnDTO {
  _id: ID;
  email: string;
  name: {
    first: string;
    last: string;
  };
}

export interface IUserSignupDTO extends Omit<IUserReturnDTO, '_id'> {
  password: string;
}

export interface IUserLoginDTO {
  email: string;
  password: string;
}
