const jwt = require('jsonwebtoken'),
  config = require('../../config').config(),
  errors = require('../helpers/errors'),
  Store = require('../../models/store'),
  Product = require('../../models/product'),
  { concat } = require('lodash');

function changeStoreProductPrice(req, res) {
  const store = await Store.findById(req.body.store);
  const product = await Product.findById(req.body.product);

  const storeProduct = await Store.products.find(p => p.product == product);
  storeProduct.price = req.body.price;
}

exports.changeStoreProductPrice = changeStoreProductPrice;
