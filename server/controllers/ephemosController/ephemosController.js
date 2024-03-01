/**
 * Controller handling all requests related to Ephemory Database
 */
class EphemosController {
  /**
   * @param {class} service - service that
   * handles business logic relating to notes
   */
  constructor(service) {
    this.service = service;
  }

  /**
   * @return {array} - notes objects
   */
  async getEphemos() {
    return await this.service.getEphemos();
  }

  /**
   * @param {string} id - id of specific ephemo document
   * @return {object} - returns ephemo objecy
   */
  async getEphemoById(id) {
    return await this.service.getEphemoById(id);
  }

  /**
   * @param {class} ephemo - Ephemo model class
   * @return {string} - status of transaction
   */
  async createEphemo(ephemo) {
    return await this.service.createEphemo(ephemo);
  }

  /**
   * @param {string} id - id of ephemo document
   * @param {object} ephemo - new contents of ephemo
   */
  async updateEphemo(id, ephemo) {
    return await this.service.updateEphemo(id, ephemo);
  };

  /**
  * @param {string} id - id of ephemo document
  * @return {string} - status of transactions
  * // TODO: work on figuring out handling of transactions
  */
  async deleteEphemoById(id) {
    return await this.service.deleteEphemoById(id);
  }
}

export {
  EphemosController,
};
