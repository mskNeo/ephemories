/* eslint-disable @typescript-eslint/no-unused-vars */
import "reflect-metadata";
import express from "express";
import cors from "cors";
import ephemosRouter from "routes/ephemosRoutes";
import * as middleware from "middleware/functions";
import config from "config/envConfig";
import { Container } from "lib/di";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // React App
};
app.use(express.json());
app.use(cors(corsOptions));

// get dependencies and values for app
const port: number = config.port;

console.log("container", Container);

// run app on port
app.listen(port, () => middleware.handlePortListen(port));

// middleware
app.use(middleware.logRequest);
app.use(middleware.handleRequestError);

// routes
app.use("/ephemos", ephemosRouter);

// handle unknown routes
app.all("*", middleware.handleUnknownRoutes);
