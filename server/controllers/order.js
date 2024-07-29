import dbClient from '../utils/db.js';
import { ObjectId } from 'mongodb';

// create a new order
export const createOrder = async (req, res) => {
  try {
    const { buyer, products, totalAmount, paymentStatus } = req.body;

    if (!customerName || !event || !items || items.length === 0) {
      return res
        .status(400)
        .json({ message: 'Customer name, event, and items are required' });
    }

    const newOrder = {
      buyer,
      products,
      totalAmount,
      paymentStatus,
      createdAt: new Date(),
    };

    const result = await dbClient.createOrder(newOrder);

    return res.status(201).json({
      message: 'Order created successfully',
      orderId: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// retrieve a particular order
export const getOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await dbClient.findOrder({ id });
    if (!order) {
      return res.status(404).json({ status: 404, message: 'Order not found' });
    }
    return res.status(200).json(order);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await dbClient.findOrders();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// update order
export const updateOrder = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'missing id in parameters' });
    }

    const order = await dbClient.findOrder(id);
    if (!order) {
      return res.status(400).json({ message: 'Order not found in database' });
    }

    const body = req.body;
    if (!body) {
      return res.status(400).json({ message: 'Missing information to update' });
    }

    await dbClient.updateOrder(order, body);
    return res.status(201).json({ message: 'Order updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error!!!' });
  }
};

// delete an order
export const deleteOrder = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);

    if (!id) {
      return res.status(400).json({ message: 'Missing id in parameters' });
    }

    const result = await dbClient.deleteOrder(id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};
