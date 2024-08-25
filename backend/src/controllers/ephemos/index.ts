import { EphemosService } from "services/ephemos";
import EphemosControllerClass from "./Controller";

export const EphemosController = new EphemosControllerClass(EphemosService);
