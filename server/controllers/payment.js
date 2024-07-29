import dbClient from '../utils/db';
import { ObjectId } from 'mongodb';

// create a new payment
export const createPayment = async (req, res) => {
  try {
    const { amount, method, orderId, customerId } = req.body;

    if (!amount || !method || !orderId || !customerId) {
      return res.status(400).json({
        message:
          'Amount, payment method, order ID, and customer ID are required',
      });
    }

    const newPayment = {
      amount,
      method,
      orderId,
      customerId,
      createdAt: new Date(),
    };

    const result = await dbClient.createPayment(newPayment);

    return res.status(201).json({
      message: 'Payment created successfully',
      paymentId: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// retrieve a particular payment
export const getPayment = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = await dbClient.findPayment({ id });
    if (!payment) {
      return res
        .status(404)
        .json({ status: 404, message: 'Payment not found' });
    }
    return res.status(200).json(payment);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// get all payments
export const getPayments = async (req, res) => {
  try {
    const payments = await dbClient.findPayments();
    return res.status(200).json(payments);
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// update payment
export const updatePayment = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'missing id in parameters' });
    }

    const payment = await dbClient.findPayment(id);
    if (!payment) {
      return res.status(400).json({ message: 'Payment not found in database' });
    }

    const body = req.body;
    if (!body) {
      return res.status(400).json({ message: 'Missing information to update' });
    }

    await dbClient.updatePayment(payment, body);
    return res.status(201).json({ message: 'Payment updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error!!!' });
  }
};

// delete a payment
export const deletePayment = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);

    if (!id) {
      return res.status(400).json({ message: 'Missing id in parameters' });
    }

    const result = await dbClient.deletePayment(id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    return res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};
