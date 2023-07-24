import { ID, Name, UserRole } from 'types';

interface UserParams {
  _id: ID;
  email: string;
  name: Name;
  role?: UserRole;
}

export class User {
  public _id;
  public email;
  public name;
  public role;

  constructor(params: UserParams) {
    this._id = params._id;
    this.email = params.email;
    this.name = params.name;
    this.role = params.role;
  }

  public getFullName() {
    return this.name.first + ' ' + this.name.last;
  }

  public getInitials() {
    return this.name.first[0] + this.name.last[0];
  }
}
