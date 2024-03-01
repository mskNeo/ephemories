import express from 'express';
import moment from 'moment';
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
  const ephemo = new Ephemo(body, moment);
  const result = await controller.createEphemo(ephemo);
  if (result.acknowledged) {
    res.status(201).send(result);
  } else {
    res.status(400).send(result);
  }
});

ephemosRouter.put('/:id', async (req, res) => {
  const body = req.body;
  const ephemo = new Ephemo(body, moment);
  const {id} = req.params;
  const query = await controller.updateEphemo(id, ephemo);
  res.status(200).send(query);
});

ephemosRouter.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const retrievedEphemo = await controller.getEphemoById(id);
  // TODO: better way of sending responses and handling errors
  // maybe handle errors in service layer
  if (retrievedEphemo.status == 200) {
    // TODO: what happens if delete fails somehow?
    const query = await controller.deleteEphemoById(id);
    res.status(200).send(query);
  } else {
    res.status(400).send(retrievedEphemo.message);
  }
});

export {
  ephemosRouter,
};
