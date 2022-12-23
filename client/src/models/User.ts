import { ID } from 'types';

interface UserParams {
  _id: ID;
  email: string;
  name: {
    first: string;
    last: string;
  };
}

export class User {
  public _id;
  public email;
  public name;

  constructor(params: UserParams) {
    this._id = params._id;
    this.email = params.email;
    this.name = params.name;
  }

  public getFullName() {
    return this.name.first + ' ' + this.name.last;
  }
}
