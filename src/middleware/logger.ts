import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import { Ephemo } from 'models/ephemoModel';
import LuxonUtils from 'utils/luxonUtils';

@Service()
export default class Logger {
  @Inject()
  private utils: LuxonUtils;

  constructor() {}

  public logRequest(
    req: Request<{}, {}, Ephemo>,
    res: Response,
    next: NextFunction,
  ): void {
    let str: string = `[INFO] ${this.utils.getDateNow()} ${req.method} ${req.url}`;
    if (req.method === 'POST' || req.method === 'PUT') {
      str += ` payload: ${JSON.stringify(req.body)}`;
    }
    console.log(str);
    next();
  }
}
