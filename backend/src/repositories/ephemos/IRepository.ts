import { Ephemo } from "models/ephemoModel";
import { DeleteResult, InsertOneResult } from "mongodb";
import { EphemoId, EphemoWithId } from "types/EphemoTypes";

export interface IEphemosRepository {
  getEphemos(): Promise<Ephemo[]>;
  createEphemo(ephemo: Ephemo): Promise<InsertOneResult<Ephemo>>;
  updateEphemo(ephemo: EphemoWithId): Promise<EphemoWithId | null>;
  deleteEphemo(id: EphemoId): Promise<DeleteResult>;
}
