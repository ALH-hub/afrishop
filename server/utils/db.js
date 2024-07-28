import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.URL ? process.env.URL : 'mongodb://localhost:27017';

class DBClient {
  constructor() {
    this.db = null;
    this.connect();
  }

  async connect() {
    try {
      const connectTimeoutMS = 60000;
      const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
        connectTimeoutMS,
      });
      await client.connect();
      this.db = client.db('afrishopdb');
      console.log('Connected to database!!!');
    } catch (error) {
      console.error('Could not connect to database\n', error);
    }
  }

  isAlive() {
    return !!this.db;
  }

  async insertClient(user) {
    try {
      return await this.db.collection('afrishopdb').insertOne(user);
    } catch (error) {
      console.error('Error inserting client: ', error);
      throw error;
    }
  }

  async findClient(id) {
    try {
      return await this.db.collection('afrishopdb').findOne(id);
    } catch (error) {
      console.error('Error finding the client', error);
      throw error;
    }
  }

  async insertVendor(user) {
    try {
      return await this.db.collection('afrishopdb').insertOne(user);
    } catch (error) {
      console.error('Error creating vendor: ', error);
      throw error;
    }
  }

  async findVendor(id) {
    try {
      return await this.db.collection('afrishop').findOne(id);
    } catch (error) {
      console.error('Error finding the vendor: ', error);
      throw error;
    }
  }

  async insertAdmin(user) {
    try {
      return await this.db.collection('afrishopdb').insertOne(user);
    } catch (error) {
      console.error('Error creating admin: ', error);
      throw error;
    }
  }

  async findAdmin(id) {
    try {
      return await this.db.collection('afrishopdb').findOne(id);
    } catch (error) {
      console.error('Error finding the admin: ', error);
      throw error;
    }
  }
}

const dbClient = new DBClient();

export default dbClient;
