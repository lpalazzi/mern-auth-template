import mongoose from 'mongoose';
import { NoID } from 'types';

export class BaseDao<Interface, IReturnInterface = Interface> {
  constructor(protected model: mongoose.Model<Interface>) {}

  async getById(id: mongoose.Types.ObjectId) {
    const document: IReturnInterface | null = await this.model
      .findById(id)
      .lean();
    return document;
  }

  async getOne(query: mongoose.FilterQuery<Interface>) {
    const document: IReturnInterface | null = await this.model
      .findOne(query)
      .lean();
    return document;
  }

  async create(newDocument: NoID<Interface>) {
    const createdDocument: Interface = (
      await this.model.create(newDocument)
    ).toObject();
    return createdDocument;
  }
}
