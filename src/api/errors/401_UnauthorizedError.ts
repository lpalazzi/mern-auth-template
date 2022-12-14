import { BaseAPIError } from './_BaseAPIError';

export class UnauthorizedError extends BaseAPIError {
  constructor(message: string = 'Unauthorized request') {
    super(message, 401);
  }
}
