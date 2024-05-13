import dotenv from 'dotenv';
dotenv.config({ path: 'src/.env' });

export const Config = () => ({
  port: process.env.port || 3001,
  dbUri: process.env.MONGODB_URI!.replace(
    '<username>:<password>',
    `${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}`
  )
});
