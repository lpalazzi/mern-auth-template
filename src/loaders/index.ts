import express from 'express';

import expressLoader from './express';
import mongooseLoader from './mongoose';
import joiObjectId from './joiObjectId';

export const load = async (expressApp: express.Express) => {
  await mongooseLoader();
  await expressLoader(expressApp);
  await joiObjectId();
};
