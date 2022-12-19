import { BaseAPIError } from './_BaseAPIError';

export class ModelNotFoundError extends BaseAPIError {
  constructor(message: string = 'Model not found') {
    super(message, 404);
  }
}
