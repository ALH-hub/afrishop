import dbClient from '../utils/db.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';

dotenv.config();

const sct = process.env.SECRETE;

// retrieve a particular client
export const getClient = async (req, res) => {
  try {
    const id = req.params.id;
    const client = await dbClient.findClient({ id });
    if (!client) {
      return res.status(404).json({ status: 404, message: 'Client not found' });
    }
    return res.status(200).json(client);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// get all clients
export const getClients = async (req, res) => {
  try {
    const clients = await dbClient.findClients();
    return res.status(200).json(clients);
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// update client
export const updateClient = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'missing id in parameters' });
    }

    const user = dbClient.findClient(id);
    if (!user) {
      return res.status(400).json({ message: 'Client not found in database' });
    }

    const body = req.body;
    if (!body) {
      return res.status(400).json({ message: 'Missing information to update' });
    }

    await dbClient.updateClient(user, body);
    return res.status(201).json({ message: 'client updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error!!!' });
  }
};

// delete client
export const deleteClient = async (req, res) => {
  try {
    const id = req.params.id;
    await dbClient.deleteClient({ id });
    return res.status(200).json({ message: 'Client deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};
