import { z } from 'zod';
import { ObjectId } from 'mongodb';

export const EphemoSchema = z.object({
  _id: z.instanceof(ObjectId),
  content: z.string(),
  createdAt: z.string().datetime(),
  expires: z.string().datetime()
});

export const EphemoRequestSchema = z.object({
  content: z.string().max(255, 'Character limit is 255')
});

export type EphemoType = z.infer<typeof EphemoSchema>;
export type EphemoRequestType = z.infer<typeof EphemoRequestSchema>;
