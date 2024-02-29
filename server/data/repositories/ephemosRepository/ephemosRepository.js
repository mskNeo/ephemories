/* eslint-disable new-cap */
import {MongoServerError} from 'mongodb';
/**
 * Repository that accesses Ephemos Collection
 */
class EphemosRepository {
  /**
   * @param {class} client - MongoClient instance
   * @param {class} model - Ephemos model
   */
  constructor(client, model) {
    this.client = client;
    this.db = client.db('ephemo-board');
    this.collection = this.db.collection('ephemos');
    this.model = model;
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
};

export {
  EphemosRepository,
};
