import express from 'express';
// eslint-disable-next-line new-cap
const ephemosRouter = express.Router();
import {controller} from '../controllers/ephemosController/index.js';
import {Ephemo} from '../models/ephemoModel.js';


ephemosRouter.get('/', async (req, res) => {
  const result = await controller.getEphemos();
  res.send(result);
});

ephemosRouter.post('/', async (req, res) => {
  const body = req.body;
  const ephemo = new Ephemo(body);
  const result = await controller.createEphemo(ephemo);
  if (result.acknowledged) {
    res.status(201).send(result);
  } else {
    res.status(400).send(result);
  }
});

ephemosRouter.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const retrievedEphemo = await controller.getEphemoById(id);
  console.log('retrievedEphemo', retrievedEphemo);
  // TODO: better way of sending responses and handling errors
  res.status(retrievedEphemo.status)
      .send(retrievedEphemo.query ?
        retrievedEphemo.query :
        retrievedEphemo.message);
});

export {
  ephemosRouter,
};
