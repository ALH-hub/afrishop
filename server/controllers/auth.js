import dbClient from '../utils/db.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const sct = process.env.SECRETE;

// student
const sRegister = async (req, res) => {
  try {
    const user = req.body;
    if (!user || !user.name || !user.email || !user.password)
      return res
        .status(400)
        .json({ status: 400, message: 'Missing Registration information' });

    const verif = await dbClient.findStudent({ email: user.email });
    if (verif)
      return res
        .status(400)
        .json({ status: 400, message: 'user already exist' });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    const newUser = {
      name: user.name,
      email: user.email,
      role: 'student',
      password: hash,
    };

    await dbClient.insertStudent(newUser);

    return res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json({ status: 500, message: 'server error' });
  }
};

export default sRegister;
