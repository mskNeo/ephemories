import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import ephemosRouter from 'routes/ephemosRoutes';
import { Container } from 'typedi';

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // React App
};
app.use(express.json());
app.use(cors(corsOptions));

const port = Container.get('port') || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// routes
app.use('/ephemos', ephemosRouter);