import { DateTime } from 'luxon';
import { Document, ObjectId } from 'mongodb';

export interface Ephemo extends Document {
  _id?: ObjectId;
  content: string;
  expires: DateTime;
}

export interface EphemoIdParams {
  id: string;
}
