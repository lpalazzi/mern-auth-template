export class BaseAPIError extends Error {
  public statusCode;
  constructor(message: string = '', statusCode: number = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}
