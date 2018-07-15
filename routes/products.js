const express = require('express');
const router = express.Router();
const { products }= require('./db.json');
const { getProduct,addProduct,updateProduct,deleteProduct } = require('../controllers/products');
router.route('/')
    .get(getProduct)
    .post(addProduct);
router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct);
module.exports=router;