/* eslint-disable new-cap */
import {MongoServerError} from 'mongodb';
/**
 * Repository that accesses Ephemos Collection
 */
class EphemosRepository {
  /**
   * @param {class} client - MongoClient instance
   */
  constructor(client) {
    this.client = client;
    this.db = client.db('ephemo-board');
    this.collection = this.db.collection('ephemos');
  }

  /**
   * Retrieve list of notes from DB
   */
  async getEphemos() {
    try {
      const query = await this.collection.find();
      return query;
    } catch (err) {
      // TODO: need to return error with readable message in response
      console.error(err);
    }
  }

  /**
   * @param {string} id - id of ephemo document
   * @return {object} - single ephemo document or error
   */
  async getEphemoById(id) {
    try {
      const query = await this.collection.findOne({'_id': id});
      return query;
    } catch (err) {
      // TODO: error handling --> NullPointerException create
      return err;
    }
  }

  /**
   * @param {class} ephemo - Ephemo model
   * @return {string} - status string
   */
  async createEphemo(ephemo) {
    try {
      const query = await this.collection.insertOne(ephemo);
      return query;
    } catch (err) {
      // TODO: error handling
      if (err instanceof MongoServerError) return err;
      throw err;
    }
  }

  /**
   * @param {ObjectId} id - ObjectId of ephemo document
   * @param {object} ephemo - new ephemo content
   */
  async updateEphemo(id, ephemo) {
    try {
      const query = await this.collection.findOneAndUpdate(
          {'_id': id},
          {$set: {'content': ephemo.content}},
          {returnDocument: 'after'},
      );
      return query;
    } catch (err) {
      return err;
    }
  }

  /**
   * @param {ObjectId} id - id of ephemo document
   * @return {object} - status of query
   */
  async deleteEphemoById(id) {
    try {
      const query = await this.collection.deleteOne({'_id': id});
      return query;
    } catch (err) {
      return err;
    }
  }
};

export {
  EphemosRepository,
};
