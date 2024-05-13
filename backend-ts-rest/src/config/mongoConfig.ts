import { MongoClient, ServerApiVersion } from 'mongodb';
import { Config } from 'config/envConfig';

export const dbClient = new MongoClient(Config().dbUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});
