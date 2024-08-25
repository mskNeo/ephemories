import { Request, Response } from "express";
import { LogLevel } from "../lib/logging";
import { HTTPCode } from "types/HTTPCodes";
import { ILogger } from "lib/logging";

export class AppError extends Error {
  statusCode: HTTPCode;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: HTTPCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ErrorHandler {
  logger: ILogger;
  env: string;
  constructor(logger: ILogger, env: string) {
    this.logger = logger;
    this.env = env;
  }

  private devErr(err: AppError, res: Response) {
    this.logger.log(LogLevel.ERROR, err.message);
    res.status(err.statusCode).send(err.message);
    throw err;
  }

  private prodErr(err: AppError, res: Response) {
    this.logger.log(LogLevel.ERROR, err.message);
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      res.status(HTTPCode.INTERNAL_SERVER_ERROR).json({
        status: "error",
        message: "Something went wrong",
      });
    }
    throw err;
  }

  public handleError(err: AppError, req: Request, res: Response): void {
    switch (this.env) {
      case "production":
        this.prodErr(err, res);
        break;
      default:
        this.devErr(err, res);
        break;
    }
  }
}
