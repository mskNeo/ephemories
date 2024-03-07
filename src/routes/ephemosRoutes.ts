import { NextFunction, Request, Response } from 'express';
import { Router } from 'express';
import { Container } from 'typedi';
import EphemosController from 'controllers/ephemosController';
import Logger from 'middleware/logger';
import { Ephemo, EphemoIdParams } from 'models/ephemoModel';

const ephemosRouter: Router = Router();

const controller: EphemosController = Container.get(EphemosController);
const logger: Logger = Container.get(Logger);

// logging middleware
ephemosRouter.use((req: Request, res: Response, next: NextFunction) =>
  logger.logRequest(req, res, next),
);

// routes
ephemosRouter.get('/', (req: Request, res: Response) =>
  controller.getEphemos(req, res),
);
ephemosRouter.post('/', (req: Request, res: Response) =>
  controller.createEphemo(req, res),
);
ephemosRouter.put(
  '/:id',
  (req: Request<EphemoIdParams, Ephemo>, res: Response) =>
    controller.updateEphemo(req, res),
);
ephemosRouter.delete(
  '/:id',
  (req: Request<EphemoIdParams>, res: Response) =>
    controller.deleteEphemo(req, res),
)

export = ephemosRouter;
