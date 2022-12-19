import { BaseAPIError } from './_BaseAPIError';

export class BadRequestError extends BaseAPIError {
  constructor(message: string = 'Bad request') {
    super(message, 400);
  }
}
