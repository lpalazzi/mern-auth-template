import { User } from '@models';
import { ID } from '@types';
import {
  IUserLoginDTO,
  IUserReturnDTO,
  IUserSignupDTO,
} from './interfaces/User';
import { makeRequest } from './reqHelpers';

export class UserApi {
  private static baseUrl = '/user';

  static async getActiveUser() {
    const userReturn: IUserReturnDTO = await makeRequest(
      `${this.baseUrl}/getActiveUser`
    );
    return new User(userReturn);
  }

  static async getById(id: ID) {
    const userReturn: IUserReturnDTO = await makeRequest(
      `${this.baseUrl}/${id}`
    );
    return new User(userReturn);
  }

  static async signup(userSignup: IUserSignupDTO) {
    const userReturn: IUserReturnDTO = await makeRequest(
      `${this.baseUrl}/signup`,
      'POST',
      { userSignup }
    );
    return new User(userReturn);
  }

  static async login(userLogin: IUserLoginDTO) {
    const userReturn: IUserReturnDTO = await makeRequest(
      `${this.baseUrl}/login`,
      'POST',
      { userLogin }
    );
    return new User(userReturn);
  }

  static async logout() {
    await makeRequest(`${this.baseUrl}/logout`);
    return true;
  }
}
