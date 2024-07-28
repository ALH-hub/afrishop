import dbClient from '../utils/db';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';

dotenv.config();

const sct = process.env.SECRETE;

// create a new vendor
export const createVendor = async (req, res) => {
  try {
    const { name, email, password, address, category, products } = req.body;

    if (!name || !email || !password || !address || !category || !products) {
      return res.status(400).json({
        message:
          'Name, contact information, address, and category are required',
      });
    }

    const newVendor = {
      name,
      email,
      password,
      address,
      category,
      products,
      createdAt: new Date(),
    };

    const result = await dbClient.createVendor(newVendor);

    return res.status(201).json({
      message: 'Vendor created successfully',
      vendorId: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// retrieve a particular vendor
export const getVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await dbClient.findVendor({ id });
    if (!vendor) {
      return res.status(404).json({ status: 404, message: 'Vendor not found' });
    }
    return res.status(200).json(vendor);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// get all vendors
export const getVendors = async (req, res) => {
  try {
    const vendors = await dbClient.findVendors();
    return res.status(200).json(vendors);
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// update vendor
export const updateVendor = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Missing id in parameters' });
    }

    const vendor = await dbClient.findVendor(id);
    if (!vendor) {
      return res.status(400).json({ message: 'Vendor not found in database' });
    }

    const body = req.body;
    if (!body) {
      return res.status(400).json({ message: 'Missing information to update' });
    }

    await dbClient.updateVendor(vendor, body);
    return res.status(201).json({ message: 'Vendor updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// delete vendor
export const deleteVendor = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    const vendor = await dbClient.findVendor({ id });
    if (!vendor) {
      return res.status(404).json({ status: 404, message: 'Vendor not found' });
    }

    await dbClient.deleteVendor(vendor);
    return res.status(200).json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};
