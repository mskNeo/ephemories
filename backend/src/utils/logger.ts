import { Inject, Service } from 'typedi';
import LuxonUtils from 'utils/luxonUtils';
import { makeBlue, makeBright, makeRed, makeYellow } from './logStyles';

@Service()
export default class Logger {
  @Inject()
  private utils: LuxonUtils;

  private messageTypes: { [key: string]: (str: string) => string };

  constructor() {
    this.messageTypes = {
      TIMESTAMP: makeBright,
      INFO: makeBlue,
      WARNING: makeYellow,
      ERROR: makeRed
    };
  }

  public log(type: string, str: string): void {
    const logTime: string = makeBright(this.utils.getDateNow().toString());
    console.log(
      `[${this.messageTypes[type](type)}] ${this.messageTypes['TIMESTAMP'](logTime)} ${str}`
    );
  }
}
