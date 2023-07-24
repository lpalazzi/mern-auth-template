import { User } from 'models';
import { ID } from 'types';
import {
  IUserLoginDTO,
  IUserReturnDTO,
  IUserSignupDTO,
} from './interfaces/User';
import { makeRequest } from './reqHelpers';

export class UserApi {
  private static baseUrl = '/user';

  static async getAll() {
    const response = await makeRequest(`${this.baseUrl}/getAll`);
    const usersReturn: IUserReturnDTO[] = response.users;
    return usersReturn.map((userReturn) => new User(userReturn));
  }

  static async getById(userId: ID) {
    const response = await makeRequest(`${this.baseUrl}/getById/${userId}`);
    const userReturn: IUserReturnDTO = response.user;
    return new User(userReturn);
  }

  static async getActiveUser() {
    const response = await makeRequest(`${this.baseUrl}/getActiveUser`);
    const userReturn: IUserReturnDTO = response.user;
    return userReturn ? new User(userReturn) : null;
  }

  static async signup(userSignup: IUserSignupDTO) {
    const response = await makeRequest(`${this.baseUrl}/signup`, 'POST', {
      userSignup,
    });
    const userReturn: IUserReturnDTO = response.user;
    return new User(userReturn);
  }

  static async login(userLogin: IUserLoginDTO) {
    const response = await makeRequest(`${this.baseUrl}/login`, 'POST', {
      userLogin,
    });
    const userReturn: IUserReturnDTO = response.user;
    return new User(userReturn);
  }

  static async logout() {
    const response = await makeRequest(`${this.baseUrl}/logout`, 'POST');
    return !!response.success;
  }
}
