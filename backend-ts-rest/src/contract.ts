import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { EphemoRequestSchema, EphemoSchema } from 'models/Ephemo';

const c = initContract();
export const contract = c.router({
  getEphemos: {
    method: 'GET',
    path: '/ephemos',
    responses: {
      200: z.array(EphemoSchema)
    },
    summary: 'Get a list of ephemos'
  },
  createEphemo: {
    method: 'POST',
    path: '/ephemos',
    body: EphemoRequestSchema,
    responses: {
      201: c.type<{ message: string }>()
    }
  }
});
