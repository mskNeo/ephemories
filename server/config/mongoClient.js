import {MongoClient, ServerApiVersion} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const dbUri = process.env.MONGODB_URI
    .replace('${DB_USERNAME}', process.env.DB_USERNAME)
    .replace('${DB_PASSWORD}', process.env.DB_PASSWORD);

// connects to a single cluster
const dbClient = new MongoClient(dbUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export {
  dbClient,
};
