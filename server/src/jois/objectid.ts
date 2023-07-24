import joi from 'joi';
import mongoose from 'mongoose';

export default () =>
  joi.custom((value) => {
    const isValidObjId = mongoose.isValidObjectId(value);
    if (isValidObjId) return value;
    throw new Error('not a valid ObjectId');
  });
