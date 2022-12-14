import { BaseAPIError } from './_BaseAPIError';

export class InternalServerError extends BaseAPIError {
  constructor(message: string = 'Internal Server Error') {
    super(message, 500);
  }
}
