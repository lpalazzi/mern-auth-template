import mongoose from 'mongoose';
import { injectable } from 'tsyringe';
import { IUser } from 'interfaces';
import { UserDao } from 'daos';
import { NoID } from 'types';

@injectable()
export class UserService {
  constructor(private userDao: UserDao) {}

  async getAll() {
    return await this.userDao.get({});
  }

  async getById(userId: mongoose.Types.ObjectId) {
    return await this.userDao.getById(userId);
  }

  async existsByEmail(email: string) {
    return await this.userDao.exists({ email });
  }

  async getByEmail(email: string) {
    return await this.userDao.getOne({ email });
  }

  async getHashById(userId: mongoose.Types.ObjectId) {
    return await this.userDao.getHashById(userId);
  }

  async create(user: NoID<IUser>) {
    return this.userDao.create(user);
  }

  async isUserAdmin(userId: mongoose.Types.ObjectId) {
    const user = await this.userDao.getById(userId);
    return user?.role === 'admin';
  }
}
