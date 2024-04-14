/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import ephemosRouter from 'routes/ephemosRoutes';
import { Container } from 'typedi';
import * as middleware from 'middleware/functions';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000' // React App
};
app.use(express.json());
app.use(cors(corsOptions));

// get dependencies and values for app
const port: number = Container.get('port') || 3001;

// run app on port
app.listen(port, () => middleware.handlePortListen(port));

// middleware
app.use(middleware.logRequest);
app.use(middleware.handleRequestError);

// routes
app.use('/ephemos', ephemosRouter);

// handle unknown routes
app.all('*', middleware.handleUnknownRoutes);
