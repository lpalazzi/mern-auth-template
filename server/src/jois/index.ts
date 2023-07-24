import joi from 'joi';
import objectid from './objectid';

declare module 'joi/lib' {
  export interface Root {
    objectId: () => AnySchema;
  }
}

export default () => {
  joi.objectId = objectid;
};
