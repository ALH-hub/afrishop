import express from 'express';
import {
  getPayment,
  getPayments,
  createPayment,
  updatePayment,
  deletePayment,
} from '../controllers/payment.js';

const router = express.Router();

router.get('/', getPayments);
router.get('/:id', getPayment);
router.post('/', createPayment);
router.put('/:id', updatePayment);
router.delete('/:id', deletePayment);

export default router;
