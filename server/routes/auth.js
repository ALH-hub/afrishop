import express from 'express';
import {
  adminLogin,
  adminRegister,
  logout,
  clientLogin,
  clientRegister,
  vendorLogin,
  vendorRegister,
  adminGetme,
  clientGetme,
  vendorGetme,
} from '../controllers/auth.js';

const router = express.Router();

// client
router.post('/client/register', clientRegister);
router.post('/client/login', clientLogin);

// vendor
router.post('/vendor/register', vendorRegister);
router.post('/vendor/login', vendorLogin);

// admin
router.post('/admin/register', adminRegister);
router.post('/admin/login', adminLogin);

router.get('/client/me', clientGetme);
router.get('/vendor/me', vendorGetme);
router.get('/admin/me', adminGetme);

router.post('/logout', logout);

export default router;
