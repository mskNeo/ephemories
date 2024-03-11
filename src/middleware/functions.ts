import { Request, Response, NextFunction } from 'express';
import { HTTPCode } from 'models/httpEnum';
import Container from 'typedi';
import { AppError, ErrorHandler } from 'utils/errorUtils';
import Logger from 'utils/logger';

const logger: Logger = Container.get(Logger);
const errorHandler: ErrorHandler = Container.get(ErrorHandler);

/**
 * @param {number} port - port number of server
 */
function handlePortListen(port: number): void {
  logger.log('INFO', `Server running on port ${port}`);
}

/**
 * Handles routes that do not exist in API
 * @param {Request} req - Request object from Express
 * @param {Response} res - Response object from Express
 * @param {NextFunction} next - Next function to call
 */
function handleUnknownRoutes(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  next(
    new AppError(
      `Endpoint ${req.method} ${req.url} does not exist`,
      HTTPCode.NOT_FOUND
    )
  );
}

/**
 * Logs every request made to API
 * @param {Request} req - Request object from Express
 * @param {Response} res - Response object from Express
 * @param {NextFunction} next - Next function to call
 */
function logRequest(req: Request, res: Response, next: NextFunction): void {
  let str: string = `${req.method} ${req.url}`;
  if (req.method === 'POST' || req.method === 'PUT') {
    str += ` payload: ${JSON.stringify(req.body)}`;
  }
  logger.log('INFO', str);
  next();
}

/**
 * Handles errors with requests
 * @param {AppError} err - Error from request
 * @param {Request} req - Request object from Express
 * @param {Response} res - Response object from Express
 * @param {NextFunction} next - Next function to call
 */
function handleRequestError(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  errorHandler.handleError(err, req, res);
  next();
}

export {
  handlePortListen,
  handleUnknownRoutes,
  logRequest,
  handleRequestError
};
