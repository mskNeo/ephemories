import {ObjectId} from 'mongodb';
/**
 * Service class to handle business logic relating to Ephemos
 */
class EphemosService {
  /**
   * Injects repository dependency in constructor
   * @param {class} repository - Ephemos Repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
 * Function that fetches all ephemos and returns in array
 * @return {array} - all ephemos objects
 */
  async getEphemos() {
    return await this.repository.getEphemos();
  }

  /**
   * @param {string} id - id of ephemo document
   * @return {object} - ephemo object
   */
  async getEphemoById(id) {
    const query = await this.repository.getEphemoById(new ObjectId(id));
    // TODO: ERROR HANDLING
    if (query === null) {
      return {status: 404, message: 'Error document not found'};
    } else {
      return {status: 200, query};
    }
  }

  /**
   * @param {class} ephemo - Ephemo model class
   * @return {string} - status of transaction
   */
  async createEphemo(ephemo) {
    return await this.repository.createEphemo(ephemo);
  }
}

export {
  EphemosService,
};
