import dbClient from '../utils/db.js';
import { ObjectId } from 'mongodb';

// create a new event
export const createEvent = async (req, res) => {
  try {
    const { title, category, location, date, status, description } = req.body;

    if (!name || !date || !location || !description) {
      return res
        .status(400)
        .json({ message: 'All event details are required' });
    }

    const newEvent = {
      title,
      category,
      location,
      date,
      status,
      description,
      createdAt: new Date(),
    };

    const result = await dbClient.createEvent(newEvent);

    return res.status(201).json({
      message: 'Event created successfully',
      eventId: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

// retrieve a particular event
export const getEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await dbClient.findEvent({ id });
    if (!event) {
      return res.status(404).json({ status: 404, message: 'Client not found' });
    }
    return res.status(200).json(event);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// get all events
export const getEvents = async (req, res) => {
  try {
    const clients = await dbClient.findEventss();
    return res.status(200).json(clients);
  } catch (error) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

// update event
export const updateEvent = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);
    if (!id) {
      return res.status(400).json({ message: 'missing id in parameters' });
    }

    const event = dbClient.findEvent(id);
    if (!event) {
      return res.status(400).json({ message: 'Event not found in database' });
    }

    const body = req.body;
    if (!body) {
      return res.status(400).json({ message: 'Missing information to update' });
    }

    await dbClient.updateEvent(event, body);
    return res.status(201).json({ message: 'event updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error!!!' });
  }
};

// delete an event
export const deleteEvent = async (req, res) => {
  try {
    const id = ObjectId(req.params.id);

    if (!id) {
      return res.status(400).json({ message: 'Missing id in parameters' });
    }

    const result = await dbClient.deleteEvent(id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    return res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};
