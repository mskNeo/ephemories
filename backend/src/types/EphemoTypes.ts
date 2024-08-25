import { Ephemo } from "models/ephemoModel";
import { WithId } from "mongodb";

export type EphemoWithId = WithId<Ephemo>;
export type EphemoId = Pick<EphemoWithId, "_id">;
