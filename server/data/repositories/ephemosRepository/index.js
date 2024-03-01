import {EphemosRepository} from './ephemosRepository.js';
import {dbClient} from '../../../config/mongoClient.js';

/**
 * Instantiation of EphemosRepository with Dependency Injection
 */
const repository = new EphemosRepository(dbClient);

export {
  repository,
};
