import { Container, Token } from 'typedi';
import dotenv from 'dotenv';
dotenv.config({ path: 'src/.env' });

export const dbToken = new Token<string>('MONGODB_URI');
Container.set('default-pagination', 50);
Container.set('port', process.env.PORT!);
Container.set('env', process.env.NODE_ENV);

Container.set(
  dbToken,
  process.env
    .MONGODB_URI!.replace('<username>', process.env.DB_USERNAME!)
    .replace('<password>', process.env.DB_PASSWORD!)
);
