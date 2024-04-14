enum LogStyles {
  Reset = '\x1b[0m',
  Bright = '\x1b[1m',
  Dim = '\x1b[2m',
  Underscore = '\x1b[4m',
  Blink = '\x1b[5m',
  Reverse = '\x1b[7m',
  Hidden = '\x1b[8m',

  FgBlack = '\x1b[30m',
  FgRed = '\x1b[31m',
  FgGreen = '\x1b[32m',
  FgYellow = '\x1b[33m',
  FgBlue = '\x1b[34m',
  FgMagenta = '\x1b[35m',
  FgCyan = '\x1b[36m',
  FgWhite = '\x1b[37m',
  FgGray = '\x1b[90m',

  BgBlack = '\x1b[40m',
  BgRed = '\x1b[41m',
  BgGreen = '\x1b[42m',
  BgYellow = '\x1b[43m',
  BgBlue = '\x1b[44m',
  BgMagenta = '\x1b[45m',
  BgCyan = '\x1b[46m',
  BgWhite = '\x1b[47m',
  BgGray = '\x1b[100m'
}

export enum LogLevel {
  INFO = 'INFO',
  ERR = 'ERROR',
  DEBUG = 'DEBUG',
  WARN = 'WARNING'
}

/**
 * Make text bright in console
 * @param {unknown} str - input to be made bold
 * @returns {string} resulting string
 */
export function makeBright(str: string): string {
  return `${LogStyles.Bright}${str}${LogStyles.Reset}`;
}

/**
 * Make text blue in console
 * @param {string} str - input to be made blue
 * @returns {string} resulting string
 */
export function makeBlue(str: string): string {
  return `${LogStyles.FgBlue}${str}${LogStyles.Reset}`;
}

/**
 * Make text yellow in console
 * @param {unknown} str - input to be made yellow
 * @returns {string} resulting string
 */
export function makeYellow(str: string): string {
  return `${LogStyles.FgYellow}${str}${LogStyles.Reset}`;
}

/**
 * Make text red in console
 * @param {unknown} str - input to be made red
 * @returns {string} resulting string
 */
export function makeRed(str: string): string {
  return `${LogStyles.FgRed}${str}${LogStyles.Reset}`;
}
