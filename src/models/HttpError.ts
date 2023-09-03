export interface CustomError extends Error {
  code: number;
}

class HttpError extends Error implements CustomError {
  code: number;

  constructor(message: string, errorCode: number) {
    super(message);
    this.code = errorCode;
  }
}

export default HttpError;
