import mongoose from 'mongoose';
import { injectable } from 'tsyringe';
import { IUser, IUserReturnDTO } from '@interfaces';
import { UserModel } from '@models';
import { BaseDao } from './BaseDao';

@injectable()
export class UserDao extends BaseDao<IUser, IUserReturnDTO> {
  constructor() {
    super(UserModel);
  }

  async getById(id: mongoose.Types.ObjectId) {
    const document: IUserReturnDTO | null = await this.model
      .findById(id)
      .select('-passwordHash')
      .lean();
    return document;
  }

  async getOne(query: mongoose.FilterQuery<IUser>) {
    const document: IUserReturnDTO | null = await this.model
      .findOne(query)
      .select('-passwordHash')
      .lean();
    return document;
  }

  async getHashById(id: mongoose.Types.ObjectId) {
    const document = await this.model
      .findById(id)
      .select('passwordHash')
      .lean();
    return document?.passwordHash;
  }
}
