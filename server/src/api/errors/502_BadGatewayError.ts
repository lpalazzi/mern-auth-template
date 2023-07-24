import { BaseAPIError } from './_BaseAPIError';

export class BadGatewayError extends BaseAPIError {
  constructor(message: string = 'Bad gateway') {
    super(message, 502);
  }
}
