import { ILogger } from "./ILogger";
import LoggerClass from "./LoggerClass";

export const Logger: ILogger = new LoggerClass();
export * from "./types";
export * from "./ILogger";
