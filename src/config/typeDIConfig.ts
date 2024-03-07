import { Container, Token } from 'typedi';
// import LuxonUtils from 'utils/luxonUtils';
import dotenv from 'dotenv';
dotenv.config({ path: 'src/.env' });

export const dbToken = new Token<string>('MONGODB_URI');
// export const luxonToken = new Token<LuxonUtils>('LUXON_UTILS');
Container.set('default-pagination', 50);
Container.set('port', process.env.PORT!);
// Container.set(luxonToken, LuxonUtils);
Container.set(
  dbToken,
  process.env
    .MONGODB_URI!.replace('<username>', process.env.DB_USERNAME!)
    .replace('<password>', process.env.DB_PASSWORD!)
);
