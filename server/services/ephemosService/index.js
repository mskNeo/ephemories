import {repository} from '../../data/repositories/ephemosRepository/index.js';
import {EphemosService} from './ephemosService.js';

const service = new EphemosService(repository);

export {
  service,
};
