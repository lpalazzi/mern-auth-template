import joi from 'joi';

declare module 'joi/lib' {
  export interface Root {
    objectId: () => AnySchema;
  }
}

export default () => {
  joi.objectId = require('joi-objectid')(joi);
};
