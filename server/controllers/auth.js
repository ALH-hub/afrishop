import dbClient from '../utils/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';

dotenv.config();

const sct = process.env.SECRETE;

// client
export const clientRegister = async (req, res) => {
  try {
    const client = req.body;
    if (!client || !client.name || !client.email || !client.password)
      return res
        .status(400)
        .json({ status: 400, message: 'Missing Registration information' });

    const verif = await dbClient.findClient({ email: client.email });
    if (verif)
      return res
        .status(400)
        .json({ status: 400, message: 'client already exist' });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(client.password, salt);

    const newClient = {
      name: client.name,
      email: client.email,
      role: 'client',
      password: hash,
    };

    await dbClient.insertClient(newClient);

    return res.status(200).json(newClient);
  } catch (err) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

export const clientLogin = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ status: 400, message: 'Missing Login Information' });

    const clientLog = req.body;
    if (!clientLog || !clientLog.email || !clientLog.password)
      return res
        .status(400)
        .json({ status: 400, message: 'Missing email or Password' });

    const dbClientLog = await dbClient.findClient({ email: clientLog.email });
    if (!dbClientLog)
      return res.status(404).json({ status: 404, message: 'client NOT FOUND' });

    if (!bcrypt.compareSync(clientLog.password, dbClientLog.password))
      return res
        .status(400)
        .json({ status: 400, message: 'wrong email or password' });

    const { password, ...loged } = dbClientLog;
    const token = jwt.sign({ id: dbClientLog._id }, sct);
    return res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ ...loged, token });
  } catch (err) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// Vendor
export const vendorRegister = async (req, res) => {
  try {
    const { name, email, password, address, category, products } = req.body;

    if (!name || !email || !password || !address || !category || !products) {
      return res.status(400).json({
        message:
          'Name, contact information, address, and category are required',
      });
    }

    const verif = await dbClient.findVendor({ email: vendor.email });
    if (verif)
      return res
        .status(400)
        .json({ status: 400, message: 'vendor already exist' });

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
  } catch (err) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

export const vendorLogin = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ status: 400, message: 'Missing Login Information' });

    const vendorLog = req.body;
    if (!vendorLog || !vendorLog.email || !vendorLog.password)
      return res
        .status(400)
        .json({ status: 400, message: 'Missing email or Password' });

    const dbVendorLog = await dbClient.findVendor({ email: vendorLog.email });
    if (!dbVendorLog)
      return res.status(404).json({ status: 404, message: 'vendor not found' });

    if (!bcrypt.compareSync(vendorLog.password, dbVendorLog.password))
      return res
        .status(400)
        .json({ status: 400, message: 'wrong email or password' });

    const { password, ...loged } = dbVendorLog;
    const token = jwt.sign({ id: dbVendorLog._id }, sct);
    return res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ ...loged, token });
  } catch (err) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// admin
export const adminRegister = async (req, res) => {
  try {
    const admin = req.body;
    if (!admin || !admin.name || !admin.email || !admin.password)
      return res
        .status(400)
        .json({ status: 400, message: 'Missing Registration information' });

    const verif = await dbClient.findAdmin({ email: admin.email });
    if (verif)
      return res
        .status(400)
        .json({ status: 400, message: 'admin already exist' });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(admin.password, salt);

    const newAdmin = {
      name: admin.name,
      email: admin.email,
      role: 'admin',
      password: hash,
    };
    await dbClient.insertAdmin(newAdmin);

    return res.status(200).json(newAdmin);
  } catch (err) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

export const adminLogin = async (req, res) => {
  try {
    if (!req.body)
      return res
        .status(400)
        .json({ status: 400, message: 'Missing Login Information' });

    const adminLog = req.body;
    if (!adminLog || !adminLog.email || !adminLog.password)
      return res
        .status(400)
        .json({ status: 400, message: 'Missing email or Password' });

    const dbAdminLog = await dbClient.findAdmin({ email: adminLog.email });
    if (!dbAdminLog)
      return res.status(404).json({ status: 404, message: 'admin NOT FOUND' });

    if (!bcrypt.compareSync(adminLog.password, dbAdminLog.password))
      return res
        .status(400)
        .json({ status: 400, message: 'wrong email or password' });

    const { password, ...loged } = dbAdminLog;
    const token = jwt.sign({ id: dbAdminLog._id }, sct);
    return res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ ...loged, token });
  } catch (err) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

export const clientGetme = async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    let { id } = jwt.verify(token, sct);
    if (!id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    id = new ObjectId(id);
    const user = await dbClient.findClient({ _id: id });
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { password, ...loged } = user;
    return res.status(200).json(loged);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

export const vendorGetme = async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    let { id } = jwt.verify(token, sct);
    if (!id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    id = new ObjectId(id);
    const user = await dbClient.findVendor({ _id: id });
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { password, ...loged } = user;
    return res.status(200).json(loged);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

export const adminGetme = async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    let { id } = jwt.verify(token, sct);
    if (!id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    id = new ObjectId(id);
    const user = await dbClient.findAdmin({ _id: id });
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { password, ...loged } = user;
    return res.status(200).json(loged);
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

export const logout = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Error logging out' });
      }
      res.clearCookie('access_token');

      return res.status(200).json({ message: 'Logged out successfully' });
    });
  } catch (err) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};
