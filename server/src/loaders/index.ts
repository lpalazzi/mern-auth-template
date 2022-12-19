import express from 'express';

import mongooseLoader from './mongoose';
import expressLoader from './express';
import joiObjectId from './joiObjectId';
import config from '@config';

export const load = async (expressApp: express.Express) => {
  await mongooseLoader();
  await expressLoader(expressApp);
  joiObjectId();
};
