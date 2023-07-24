import { BaseAPIError } from './_BaseAPIError';

export class DataNotFoundError extends BaseAPIError {
  constructor(message: string = 'Data not found') {
    super(message, 404);
  }
}
