import { EphemosController } from "controllers/ephemos";
import { Request, Response } from "express";
import { Router } from "express";

const ephemosRouter: Router = Router();

// routes
ephemosRouter.get("/", (req: Request, res: Response) =>
  EphemosController.getEphemos(req, res)
);
ephemosRouter.post("/", (req: Request, res: Response) =>
  EphemosController.createEphemo(req, res)
);
ephemosRouter.put("/:id", (req: Request, res: Response) =>
  EphemosController.updateEphemo(req, res)
);
ephemosRouter.delete("/:id", (req: Request, res: Response) =>
  EphemosController.deleteEphemo(req, res)
);
ephemosRouter.get("/test", (req: Request, res: Response) =>
  EphemosController.test(req, res)
);

export default ephemosRouter;
