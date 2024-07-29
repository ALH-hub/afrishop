import dbClient from '../utils/db.js';
import { ObjectId } from 'mongodb';

// Create a new review
export const createReview = async (req, res) => {
  try {
    const { name, review, rating } = req.body;

    if (!name || !review || !rating) {
      return res.status(400).json({
        message: 'Name, review, and rating are required',
      });
    }

    const newReview = {
      name,
      review,
      rating,
      createdAt: new Date(),
    };

    const result = await dbClient.createReview(newReview);

    return res.status(201).json({
      message: 'Review created successfully',
      reviewId: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// Retrieve a particular review
export const getReview = async (req, res) => {
  try {
    const id = req.params.id;
    const review = await dbClient.findReview({ id });
    if (!review) {
      return res.status(404).json({ status: 404, message: 'Review not found' });
    }
    return res.status(200).json(review);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// Get all reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await dbClient.findReviews();
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// Update review
export const updateReview = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Missing id in parameters' });
    }

    const review = await dbClient.findReview(id);
    if (!review) {
      return res.status(400).json({ message: 'Review not found in database' });
    }

    const body = req.body;
    if (!body) {
      return res.status(400).json({ message: 'Missing information to update' });
    }

    await dbClient.updateReview(review, body);
    return res.status(201).json({ message: 'Review updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Delete review
export const deleteReview = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'Missing id in parameters' });
    }

    const review = await dbClient.findReview(id);
    if (!review) {
      return res.status(400).json({ message: 'Review not found in database' });
    }

    await dbClient.deleteReview(review);
    return res.status(201).json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
