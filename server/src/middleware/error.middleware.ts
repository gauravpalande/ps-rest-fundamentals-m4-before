import { NextFunction, Request, Response } from "express";
import { InvalidTokenError, UnauthorizedError } from "express-oauth2-jwt-bearer";

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (error instanceof InvalidTokenError) {
    const messaage = "Bad Credentials";
    response.status(error.status).json({ messaage });
    return;
  }
  if (error instanceof UnauthorizedError) {
    const messaage = "Requires authentication";
    response.status(error.status).json({ messaage });
    return;
  }
  const status = 500;
  const message = "Internal Server Error";

  response.status(status).json({ message });
};
