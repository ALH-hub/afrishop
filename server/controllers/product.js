import dbClient from '../utils/db.js';
import dotenv from 'dotenv';
import { ObjectId } from 'mongodb';

// create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({
        message: 'Name, description, price, category, and stock are required',
      });
    }

    const newProduct = {
      name,
      description,
      price,
      category,
      stock,
      createdAt: new Date(),
    };

    const result = await dbClient.createProduct(newProduct);

    return res.status(201).json({
      message: 'Product created successfully',
      productId: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// retrieve a particular product
export const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await dbClient.findProduct({ id });
    if (!product) {
      return res
        .status(404)
        .json({ status: 404, message: 'Product not found' });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// get all products
export const getProducts = async (req, res) => {
  try {
    const products = await dbClient.findProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// update product
export const updateProduct = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Missing id in parameters' });
    }

    const product = await dbClient.findProduct(id);
    if (!product) {
      return res.status(400).json({ message: 'Product not found in database' });
    }

    const body = req.body;
    if (!body) {
      return res.status(400).json({ message: 'Missing information to update' });
    }

    await dbClient.updateProduct(product, body);
    return res.status(201).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// delete a product
export const deleteProduct = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);

    if (!id) {
      return res.status(400).json({ message: 'Missing id in parameters' });
    }

    const result = await dbClient.deleteProduct(id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};
