import { Ephemo } from 'models/ephemoModel';
import { ObjectId } from 'mongodb';
import { EphemosRepository } from 'repositories/ephemosRepository';
import { Inject, Service } from 'typedi';
import LuxonUtils from 'utils/luxonUtils';

@Service()
export class EphemosService {
  @Inject()
  public repository: EphemosRepository;

  @Inject()
  public utils: LuxonUtils;

  constructor() {}

  private handleError(err: unknown): Error {
    const error = new Error(`${err}`);
    console.error(error.cause);
    return error;
  }

  /**
   * @returns {Promise<Ephemo[]>} Results of query in DB
   */
  async getEphemos(): Promise<Ephemo[]> {
    try {
      const query = await this.repository.getEphemos().toArray();
      return new Promise<Ephemo[]>((resolve, reject) => {
        if (query.length === 0) {
          reject('No Ephemos found');
        } else {
          resolve(query);
        }
      });
    } catch (err) {
      throw this.handleError(err);
    }
  }

  /**
   * @param {Ephemo} ephemo - Ephemo to be created
   * @returns {Promise<string>} Returns string detailing results of insertion
   */
  async createEphemo(ephemo: Ephemo): Promise<string> {
    try {
      const ephemoToSave: Ephemo = ephemo;
      ephemoToSave.expires = this.utils.getOneWeekFromNow();

      const query = await this.repository.createEphemo(ephemoToSave);
      return new Promise<string>((resolve, reject) => {
        if (!query.acknowledged) {
          reject(`Error inserting ephemo with body ${JSON.stringify(ephemo)}`);
        } else {
          resolve(`Created ephemo with id ${query.insertedId.toHexString()}`);
        }
      });
    } catch (err) {
      throw this.handleError(err);
    }
  }

  /**
   * @param {string} id - id of Ephemo to be updated
   * @param {Ephemo} ephemo - new Ephemo body
   * @returns {Promise<Ephemo>} - returns Ephemo object if successful
   */
  async updateEphemo(id: string, ephemo: Ephemo): Promise<Ephemo> {
    try {
      const query = await this.repository.updateEphemo(
        new ObjectId(id),
        ephemo
      );
      return new Promise((resolve, reject) => {
        if (query === null) {
          reject(`Cannot find ephemo with id ${id}`);
        } else {
          resolve(query);
        }
      });
    } catch (err) {
      throw this.handleError(err);
    }
  }

  /**
   * @param {string} id - id of Ephemo to be deleted
   * @returns {Promise<string>} returns string detailing results of deletion
   */
  async deleteEphemo(id: string): Promise<string> {
    try {
      const query = await this.repository.deleteEphemo(new ObjectId(id));
      return new Promise<string>((resolve, reject) => {
        if (!query.acknowledged) {
          reject(`Error inserting ephemo with id ${id}`);
        } else {
          resolve(`Deleted ${query.deletedCount} ephemos`);
        }
      });
    } catch (err) {
      throw this.handleError(err);
    }
  }
}