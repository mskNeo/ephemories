import { Request, Response, NextFunction } from "express";
import config from "config/envConfig";
import { AppError, ErrorHandler } from "utils/errorUtils";
import { HTTPCode } from "types/HTTPCodes";
import { Logger, LogLevel } from "lib/logging";

const errorHandler = new ErrorHandler(Logger, config.env);

/**
 * Log server running on port
 * @param {number} port - port number of server
 */
function handlePortListen(port: number) {
  Logger.log(LogLevel.INFO, `Server running on port ${port}`);
}

/**
 * Throw error when hitting routes that do not exist in API
 * @param {Request} req - Request object from Express
 * @param {Response} res - Response object from Express
 * @param {NextFunction} next - Next function to call
 */
function handleUnknownRoutes(req: Request, res: Response, next: NextFunction) {
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
function logRequest(req: Request, res: Response, next: NextFunction) {
  let str: string = `${req.method} ${req.url}`;
  if (req.method === "POST" || req.method === "PUT") {
    str += ` payload: ${JSON.stringify(req.body)}`;
  }
  Logger.log(LogLevel.INFO, str);
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
  handleRequestError,
};
