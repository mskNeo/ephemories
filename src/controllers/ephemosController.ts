import { Request, Response } from 'express';
import { Inject, Service } from 'typedi';
import { EphemosService } from 'services/ephemosService';
import { Ephemo, EphemoIdParams } from 'models/ephemoModel';

@Service()
export default class EphemosController {
  @Inject()
  service: EphemosService;

  constructor() {}

  getEphemos(req: Request, res: Response) {
    this.service
      .getEphemos()
      .then((ephemos: Ephemo[]) => {
        res.status(200).send(ephemos);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  }

  createEphemo(req: Request<object, object, Ephemo>, res: Response) {
    const body: Ephemo = req.body;

    this.service
      .createEphemo(body)
      .then((result: string) => {
        res.status(201).send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  updateEphemo(req: Request<EphemoIdParams, Ephemo>, res: Response) {
    const id: string = req.params.id;
    const body: Ephemo = req.body;

    this.service
      .updateEphemo(id, body)
      .then((result: Ephemo) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(400).send(`Error updating ephemo with id ${id}`);
      });
  }

  deleteEphemo(req: Request<EphemoIdParams>, res: Response) {
    const id = req.params.id;
    console.log('id', id);

    this.service
      .deleteEphemo(id)
      .then((result: string) => {
        res.status(200).send(result);
      })
      .catch(() => {
        res.status(405).send('Delete not allowed');
      });
  }
}
