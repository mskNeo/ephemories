import { Ephemo } from "models/ephemoModel";
import { EphemoWithId } from "types/EphemoTypes";

export interface IEphemosService {
  test(): string;
  getEphemos(): Promise<Ephemo[]>;
  createEphemo(ephemo: Ephemo): Promise<string>;
  updateEphemo(ephemo: EphemoWithId): Promise<EphemoWithId>;
  deleteEphemo(id: string): Promise<string>;
}
