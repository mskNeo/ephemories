import { DateTime, Settings } from 'luxon';
import { Service } from 'typedi';

@Service()
export default class LuxonUtils {
  constructor() {
    Settings.defaultZone = 'utc';
  }

  public getOneWeekFromNow(): DateTime {
    return DateTime.now().plus({ weeks: 1 });
  }

  public getDateTimeFromString(value: string): DateTime {
    return DateTime.fromISO(value);
  }

  public getDateNow(): DateTime {
    return DateTime.now();
  }
}
