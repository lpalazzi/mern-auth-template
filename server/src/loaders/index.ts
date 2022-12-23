import express from 'express';

import mongooseLoader from './mongoose';
import expressLoader from './express';
import joiObjectId from './joiObjectId';

export const load = async (expressApp: express.Express) => {
  await mongooseLoader();
  await expressLoader(expressApp);
  joiObjectId();
};
