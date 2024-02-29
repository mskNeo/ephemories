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
}

export {
  EphemosController,
};
