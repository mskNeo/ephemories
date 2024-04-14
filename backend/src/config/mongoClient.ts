import { MongoClient, ServerApiVersion } from 'mongodb';
import { Container } from 'typedi';
import { dbToken } from './typeDIConfig';

export const dbClient = new MongoClient(Container.get(dbToken), {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});
