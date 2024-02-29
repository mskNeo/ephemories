import {EphemosController} from './ephemosController.js';
import {service} from '../../services/ephemosService/index.js';

const controller = new EphemosController(service);

export {
  controller,
};
