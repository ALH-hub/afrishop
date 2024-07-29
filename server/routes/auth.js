import express from 'express';
import { authController } from '../controllers/auth.js';

const router = express.Router();

router.get('/', authController);

module.exports = router;
