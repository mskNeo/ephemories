import { ILogger } from "./ILogger";
import { LogLevel, LogStyles, LogTypeStyles } from "./types";

/**
 * Class that handles logging to the console
 */
export default class LoggerClass implements ILogger {
  constructor() {}

  /**
   * Create the string with the specified styles
   * @param type - type of log message
   * @param str - string to log
   * @returns string with the specified styles
   */
  private applyStyle(type: LogLevel, str: string) {
    return `${LogStyles[LogTypeStyles[type]]}${str}${LogStyles.Reset}`;
  }

  /**
   * Log string to console according to type specifications
   * @param level - type of log message
   * @param str - string to log
   */
  public log(level: LogLevel, str: string) {
    const logTimestamp: string = this.applyStyle(
      LogLevel.TIMESTAMP,
      new Date().toISOString()
    );
    console.log(
      `${this.applyStyle(level, `[${level}]`)} ${logTimestamp} ${str}`
    );
  }
}
