import mongoose from 'mongoose';
import argon2 from 'argon2';
import joi from 'joi';
import { injectable } from 'tsyringe';
import { UserDao } from 'daos';
import { IUserLoginDTO, IUserReturnDTO, IUserSignupDTO } from 'interfaces';

@injectable()
export class UserService {
  constructor(private userDao: UserDao) {}

  async getById(userId: mongoose.Types.ObjectId) {
    return await this.userDao.getById(userId);
  }

  async getByEmail(email: string) {
    return await this.userDao.getOne({ email });
  }

  async signup(
    userDTO: IUserSignupDTO
  ): Promise<{ user: IUserReturnDTO | null; error: string | null }> {
    const { error } = this.validateUserSignup(userDTO);
    if (error) {
      return {
        user: null,
        error: error.message,
      };
    }

    const { password, ...userToCreate } = userDTO;
    const passwordHash = await argon2.hash(password);
    const user = await this.userDao.create({
      ...userToCreate,
      passwordHash,
    });

    return {
      user,
      error: null,
    };
  }

  private userSignupSchema = joi
    .object({
      email: joi.string().email().required(),
      password: joi.string().min(8).max(64).required(),
      name: joi
        .object({
          first: joi.string().required(),
          last: joi.string().required(),
        })
        .required(),
    })
    .required();

  private validateUserSignup(userDTO: IUserSignupDTO) {
    return this.userSignupSchema.validate(userDTO);
  }

  async login(
    userLogin: IUserLoginDTO
  ): Promise<{ user: IUserReturnDTO | null; error: string | null }> {
    try {
      const { error } = joi
        .object({
          email: joi.string().required(),
          password: joi.string().required(),
        })
        .required()
        .validate(userLogin);

      if (error) {
        throw new Error(error.message);
      }

      const user = await this.getByEmail(userLogin.email);

      if (!user) {
        throw new Error(`User with email ${userLogin.email} not found`);
      }

      const passwordHash = await this.userDao.getHashById(user._id);

      if (!passwordHash) {
        throw new Error('User does not have a password');
      }

      const verified = await argon2.verify(passwordHash, userLogin.password);

      if (!verified) {
        throw new Error(`Incorrect password`);
      }

      return {
        user,
        error: null,
      };
    } catch (err: any) {
      return {
        user: null,
        error: err.message || 'Unhandled login error',
      };
    }
  }
}
