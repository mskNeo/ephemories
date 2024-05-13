import express from 'express';
import cors from 'cors';
import { createExpressEndpoints, initServer } from '@ts-rest/express';
import { contract } from './contract';
import { Config } from 'config/envConfig';
import { createEphemoService } from 'services/ephemoService';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const s = initServer();

const service = createEphemoService();

const router = s.router(contract, {
  getEphemos: async () => {
    const query = await service.getEphemos();
    const results = await query.toArray();
    return {
      status: 200,
      body: results
    };
  },
  createEphemo: async ({ body }) => {
    const query = await service.createEphemo(body);
    const results = query.insertedId;
    return {
      status: 201,
      body: { message: `Inserted object with id ${results}` }
    };
  }
});

createExpressEndpoints(contract, router, app, {
  responseValidation: true,
  requestValidationErrorHandler: 'combined'
});

app.listen(Config().port, () => {
  console.log(`Listening on port: ${Config().port}`);
});
