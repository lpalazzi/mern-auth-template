import { BaseAPIError } from './_BaseAPIError';

export class GatewayTimeoutError extends BaseAPIError {
  constructor(message: string = 'Gateway timeout') {
    super(message, 504);
  }
}
