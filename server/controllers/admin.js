import dbClient from '../utils/db';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';

dotenv.config();

const sct = process.env.SECRETE;

// create a new admin
export const createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: 'Username and password are required' });
    }

    // Check if the admin already exists
    const existingAdmin = await dbClient.findAdmin({ username });
    if (existingAdmin) {
      return res.status(409).json({ message: 'Admin already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the admin object
    const newAdmin = {
      username,
      password: hashedPassword,
      createdAt: new Date(),
    };

    // Insert the admin into the database
    const result = await dbClient.createAdmin(newAdmin);

    return res.status(201).json({
      message: 'Admin created successfully',
      adminId: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// retrieve a particular admin
export const getAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const admin = await dbClient.findAdmin({ id });
    if (!admin) {
      return res.status(404).json({ status: 404, message: 'admin not found' });
    }
    return res.status(200).json(admin);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// get all admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await dbClient.findAdmins();
    return res.status(200).json(admins);
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// update admin
export const updateAdmin = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'missing id in parameters' });
    }

    const user = dbClient.findAdmin(id);
    if (!user) {
      return res.status(400).json({ message: 'admin not found in database' });
    }

    const body = req.body;
    if (!body) {
      return res.status(400).json({ message: 'Missing information to update' });
    }

    await dbClient.updateAdmin(user, body);
    return res.status(201).json({ message: 'admin updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error!!!' });
  }
};

// delete an admin
export const deleteAdmin = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);

    if (!id) {
      return res.status(400).json({ message: 'Missing id in parameters' });
    }

    const result = await dbClient.deleteAdmin(id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    return res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};
