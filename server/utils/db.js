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
      return await this.db.collection('clients').insertOne(user);
    } catch (error) {
      console.error('Error inserting client: ', error);
      throw error;
    }
  }

  async findClient(id) {
    try {
      return await this.db.collection('clients').findOne(id);
    } catch (error) {
      console.error('Error finding the client', error);
      throw error;
    }
  }

  async findClients() {
    try {
      return await this.db.collection('clients').find();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateClient(client, body) {
    try {
      return await this.db.collection('clients').updateOne(client, {
        $set: body,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async insertVendor(user) {
    try {
      return await this.db.collection('vendors').insertOne(user);
    } catch (error) {
      console.error('Error creating vendor: ', error);
      throw error;
    }
  }

  async findVendor(id) {
    try {
      return await this.db.collection('vendors').findOne(id);
    } catch (error) {
      console.error('Error finding the vendor: ', error);
      throw error;
    }
  }

  async insertAdmin(user) {
    try {
      return await this.db.collection('admins').insertOne(user);
    } catch (error) {
      console.error('Error creating admin: ', error);
      throw error;
    }
  }

  async findAdmins() {
    try {
      return await this.db.collection('admins').find();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAdmin(id) {
    try {
      return await this.db.collection('admins').findOne(id);
    } catch (error) {
      console.error('Error finding the admin: ', error);
      throw error;
    }
  }

  async updateAdmin(admin, body) {
    try {
      return await this.db.collection('admins').updateOne(admin, {
        $set: body,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteAdmin(id) {
    try {
      return await this.db.collection('admins').deleteOne(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findVendor(id) {
    try {
      return await this.db.collection('vendors').findOne(id);
    } catch (error) {
      console.error('Error finding the vendor: ', error);
      throw error;
    }
  }

  async findVendors() {
    try {
      return await this.db.collection('vendors').find();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateVendor(vendor, body) {
    try {
      return await this.db.collection('vendors').updateOne(vendor, {
        $set: body,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteVendor(id) {
    try {
      return await this.db.collection('vendors').deleteOne(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async insertOrder(order) {
    try {
      return await this.db.collection('orders').insertOne(order);
    } catch (error) {
      console.error('Error creating order: ', error);
      throw error;
    }
  }

  async findOrder(id) {
    try {
      return await this.db.collection('orders').findOne(id);
    } catch (error) {
      console.error('Error finding the order: ', error);
      throw error;
    }
  }

  async findOrders() {
    try {
      return await this.db.collection('orders').find();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateOrder(order, body) {
    try {
      return await this.db.collection('orders').updateOne(order, {
        $set: body,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteOrder(id) {
    try {
      return await this.db.collection('orders').deleteOne(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async insertPayment(payment) {
    try {
      return await this.db.collection('payments').insertOne(payment);
    } catch (error) {
      console.error('Error creating payment: ', error);
      throw error;
    }
  }

  async findPayment(id) {
    try {
      return await this.db.collection('payments').findOne(id);
    } catch (error) {
      console.error('Error finding the payment: ', error);
      throw error;
    }
  }

  async findPayments() {
    try {
      return await this.db.collection('payments').find();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updatePayment(payment, body) {
    try {
      return await this.db.collection('payments').updateOne(payment, {
        $set: body,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deletePayment(id) {
    try {
      return await this.db.collection('payments').deleteOne(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async insertProduct(product) {
    try {
      return await this.db.collection('products').insertOne(product);
    } catch (error) {
      console.error('Error creating product: ', error);
      throw error;
    }
  }

  async findProduct(id) {
    try {
      return await this.db.collection('products').findOne(id);
    } catch (error) {
      console.error('Error finding the product: ', error);
      throw error;
    }
  }

  async findProducts(id) {
    try {
      id
        ? await this.db.collection('products').find({ vendorId: id }).toArray()
        : await this.db.collection('products').find();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateProduct(product, body) {
    try {
      return await this.db.collection('products').updateOne(product, {
        $set: body,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      return await this.db.collection('products').deleteOne(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const dbClient = new DBClient();

export default dbClient;
