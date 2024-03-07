import { Inject, Service } from 'typedi';
import { dbClient } from 'config/mongoClient';
import { Db, Collection, InsertOneResult, AggregationCursor, ObjectId, WithId, DeleteResult } from 'mongodb';
import { Ephemo } from 'models/ephemoModel';
import LuxonUtils from 'utils/luxonUtils';

@Service()
export class EphemosRepository {
  private db: Db;
  private collection: Collection<Ephemo>;

  @Inject()
  private utils: LuxonUtils;

  @Inject('default-pagination')
  private sampleSize: number;

  constructor() {
    this.db = dbClient.db('ephemory');
    this.collection = this.db.collection<Ephemo>('ephemos');
  }

  getEphemos(): AggregationCursor<Ephemo> {
    const size: number = this.sampleSize;
    console.log(size, typeof size);

    const query = this.collection.aggregate<Ephemo>([
      { $match: { expires: { $gt: this.utils.getDateNow() } } },
      { $sample: { size } },
    ]);
    return query;
  }

  async createEphemo(ephemo: Ephemo): Promise<InsertOneResult<Ephemo>> {
    return this.collection.insertOne(ephemo);
  }

  async updateEphemo(id: ObjectId, ephemo: Ephemo): Promise<WithId<Ephemo> | null> {
    return this.collection.findOneAndUpdate(
      { _id: id },
      { $set: { 'content': ephemo.content } },
      { returnDocument: 'after' }
    );
  }

  async deleteEphemo(id: ObjectId): Promise<DeleteResult> {
    return this.collection.deleteOne({ _id: id });
  }
}
