/**
 * Ephemo Class
 */
class Ephemo {
  /**
   * @param {string} id - ID of Ephemo
   * @param {string} content - content string
   * @param {string} expires - expiration date
   */
  constructor({_id, content, expires} = {}, moment) {
    this._id = _id;
    this.content = content;
    this.expires = expires ?
      expires :
      moment().add(1, 'week').format();
  }
}

export {
  Ephemo,
};
