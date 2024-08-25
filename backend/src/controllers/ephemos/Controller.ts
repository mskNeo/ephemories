import { Request, Response } from "express";
import { IEphemosService } from "services/ephemos/IService";
import { IEphemosController } from "./IController";
import { Ephemo } from "models/ephemoModel";
import { EphemoWithId } from "types/EphemoTypes";
import { AppError } from "utils/errorUtils";
import { HTTPCode } from "types/HTTPCodes";

export default class EphemosControllerClass implements IEphemosController {
  service: IEphemosService;

  constructor(service: IEphemosService) {
    this.service = service;
  }

  test(req: Request, res: Response) {
    const result = this.service.test();
    res.status(HTTPCode.OK).send(result);
  }

  // TODO: leverage error handler
  async getEphemos(req: Request, res: Response) {
    this.service
      .getEphemos()
      .then((ephemos: Ephemo[]) => {
        res.status(HTTPCode.OK).send(ephemos);
      })
      .catch((err: unknown) => {
        res.status(HTTPCode.NOT_FOUND).send(err);
        throw new AppError(err as string, HTTPCode.NOT_FOUND);
      });
  }

  async createEphemo(req: Request<object, Ephemo>, res: Response) {
    const body: Ephemo = req.body;

    this.service
      .createEphemo(body)
      .then((result: string) => {
        res.status(HTTPCode.CREATED).send(result);
      })
      .catch((err: string) => {
        res.status(HTTPCode.BAD_REQUEST).send(err);
      });
  }

  async updateEphemo(req: Request<object, EphemoWithId>, res: Response) {
    const body: EphemoWithId = req.body;

    this.service
      .updateEphemo(body)
      .then((result: Ephemo) => {
        res.status(HTTPCode.OK).send(result);
      })
      .catch(() => {
        res
          .status(HTTPCode.BAD_REQUEST)
          .send(`Error updating ephemo with id ${body._id}`);
      });
  }

  async deleteEphemo(req: Request, res: Response) {
    const id = req.params.id;

    this.service
      .deleteEphemo(id)
      .then((result: string) => {
        res.status(HTTPCode.OK).send(result);
      })
      .catch(() => {
        res.status(HTTPCode.NOT_ALLOWED).send("Delete not allowed");
      });
  }
}
