import { BaseAPIError } from './_BaseAPIError';

export class ServiceUnavailableError extends BaseAPIError {
  constructor(message: string = 'Service unavailable') {
    super(message, 503);
  }
}
