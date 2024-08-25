import { LogLevel } from "./types";

export interface ILogger {
  log(level: LogLevel, str: string): void;
}
