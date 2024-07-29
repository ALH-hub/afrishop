import express from 'express';
import {
  getClients,
  getClient,
  updateClient,
  deleteClient,
} from '../controllers/client.js';

const router = express.Router();

router.get('/', getClients);
router.get('/:id', getClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;
