import { Request, Response } from "express";

export interface IEphemosController {
  getEphemos(req: Request, res: Response): Promise<void>;
  createEphemo(req: Request, res: Response): Promise<void>;
  updateEphemo(req: Request, res: Response): Promise<void>;
  deleteEphemo(req: Request, res: Response): Promise<void>;
}
