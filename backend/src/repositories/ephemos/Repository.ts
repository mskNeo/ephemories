import { dbClient } from "config/mongoClient";
import { Db, Collection } from "mongodb";
import { Ephemo } from "models/ephemoModel";
import { now } from "utils/datetimeUtils";
import { IEphemosRepository } from "./IRepository";
import { EphemoId, EphemoWithId } from "types/EphemoTypes";
import { Init } from "lib/di";

@Init
export default class EphemosRepositoryClass implements IEphemosRepository {
  private db: Db;
  private collection: Collection<Ephemo>;
  private sampleSize: number;

  constructor() {
    this.db = dbClient.db("ephemory");
    this.collection = this.db.collection<Ephemo>("ephemos");
  }

  async getEphemos() {
    const size: number = this.sampleSize;

    const query = this.collection.aggregate<Ephemo>([
      { $match: { expires: { $gt: now() } } },
      { $sample: { size } },
    ]);
    return query.toArray();
  }

  async createEphemo(ephemo: Ephemo) {
    return this.collection.insertOne(ephemo);
  }

  async updateEphemo(ephemo: EphemoWithId) {
    return this.collection.findOneAndUpdate(
      { _id: ephemo._id },
      { $set: { content: ephemo.content } },
      { returnDocument: "after" }
    );
  }

  async deleteEphemo(id: EphemoId) {
    return this.collection.deleteOne({ _id: id });
  }
}
