import express from 'express';
import cors from 'cors';
import {ephemosRouter} from './routes/ephemosRoutes.js';
import 'dotenv/config';

const app = express();

// enable cors
const corsOptions = {
  origin: 'https://localhost:3000', // React app
};
app.use(express.json());
app.use(cors(corsOptions));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('listening on port ' + port);
});

// routes
app.use('/ephemos', ephemosRouter);
