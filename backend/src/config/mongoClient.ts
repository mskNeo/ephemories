import { MongoClient, ServerApiVersion } from "mongodb";
import config from "./envConfig";

const uri = config.dbUri;

export const dbClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
