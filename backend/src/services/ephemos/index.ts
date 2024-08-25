import { EphemosRepository } from "repositories/ephemos";
import EphemosServiceClass from "./Service";

export const EphemosService = new EphemosServiceClass(EphemosRepository);
