import { dbClient } from 'config/mongoConfig';
import { EphemoSchema, EphemoRequestType, EphemoType } from 'models/Ephemo';
import { Collection, Db, MongoClient, ObjectId } from 'mongodb';
import { addDays } from 'date-fns';

export class EphemoService {
  private readonly db: Db;
  private readonly collection: Collection<EphemoType>;

  constructor(dbClient: MongoClient) {
    this.db = dbClient.db('ephemory');
    this.collection = this.db.collection<EphemoType>('ephemos');
  }

  async getEphemos() {
    const queryParams = [
      { $match: { expires: { $gt: new Date().toISOString() } } },
      { $sample: { size: 20 } }
    ];
    return this.collection.aggregate<EphemoType>(queryParams);
  }

  async createEphemo(body: EphemoRequestType) {
    const now = new Date().toISOString();

    const ephemo = {
      ...body,
      _id: new ObjectId(),
      createdAt: now,
      expires: addDays(now, 5).toISOString()
    };

    // validate body
    EphemoSchema.parse(ephemo);

    return this.collection.insertOne(ephemo);
  }
}

export const createEphemoService = () => {
  return new EphemoService(dbClient);
};
