const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

// /admin/add-product => GET
router.get('/admin/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/admin/add-product', adminController.postAddProduct);

// /admin/products => GET
router.get('/admin/products', adminController.getProducts);

module.exports = router;
