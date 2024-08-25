import { Ephemo } from "models/ephemoModel";
import { ObjectId } from "mongodb";
import { IEphemosRepository } from "repositories/ephemos/IRepository";
import { getOneWeekFromNow } from "utils/datetimeUtils";
import { IEphemosService } from "./IService";
import { EphemoId, EphemoWithId } from "types/EphemoTypes";
import { AppError } from "utils/errorUtils";
import { HTTPCode } from "types/HTTPCodes";
import { log } from "lib/log-decorator";

export default class EphemosServiceClass implements IEphemosService {
  public repo: IEphemosRepository;

  constructor(repo: IEphemosRepository) {
    this.repo = repo;
  }

  // @log
  test() {
    return "Test fn ran";
  }

  /**
   * @returns Results of query in DB
   */
  async getEphemos() {
    try {
      const query = await this.repo.getEphemos();
      return new Promise<Ephemo[]>((resolve, reject) => {
        if (query.length === 0) {
          reject("No Ephemos found");
        } else {
          resolve(query);
        }
      });
    } catch (err) {
      throw new AppError(err as string, HTTPCode.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * @param {Ephemo} ephemo - Ephemo to be created
   * @returns Returns string detailing results of insertion
   */
  async createEphemo(ephemo: Ephemo) {
    try {
      const ephemoToSave: Ephemo = ephemo;
      ephemoToSave.expires = getOneWeekFromNow();

      const query = await this.repo.createEphemo(ephemoToSave);
      return new Promise<string>((resolve, reject) => {
        if (!query.acknowledged) {
          reject(`Error inserting ephemo with body ${JSON.stringify(ephemo)}`);
        } else {
          resolve(`Created ephemo with id ${query.insertedId.toHexString()}`);
        }
      });
    } catch (err) {
      throw new AppError(err as string, HTTPCode.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * @param {EphemoWithId} ephemo - updated Ephemo object
   * @returns - returns Ephemo object if successful
   */
  async updateEphemo(ephemo: EphemoWithId) {
    try {
      const query = await this.repo.updateEphemo(ephemo);
      return new Promise<EphemoWithId>((resolve, reject) => {
        if (query === null) {
          reject(`Cannot find ephemo with id ${ephemo._id}`);
        } else {
          resolve(query);
        }
      });
    } catch (err) {
      throw new AppError(err as string, HTTPCode.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * @param {string} id - id of Ephemo to be deleted
   * @returns returns string detailing results of deletion
   */
  async deleteEphemo(id: string) {
    try {
      const ephemoId: EphemoId = { _id: new ObjectId(id) };
      const query = await this.repo.deleteEphemo(ephemoId);
      return new Promise<string>((resolve, reject) => {
        if (!query.acknowledged) {
          reject(`Error inserting ephemo with id ${id}`);
        } else {
          resolve(`Deleted ${query.deletedCount} ephemos`);
        }
      });
    } catch (err) {
      throw new AppError(err as string, HTTPCode.INTERNAL_SERVER_ERROR);
    }
  }
}
