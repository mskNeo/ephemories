import {EphemosRepository} from './ephemosRepository.js';
import {Ephemo} from '../../../models/ephemoModel.js';
import {dbClient} from '../../../config/mongoClient.js';

/**
 * Instantiation of EphemosRepository with Dependency Injection
 */
const repository = new EphemosRepository(dbClient, new Ephemo());

export {
  repository,
};
