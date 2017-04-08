const jwt = require('jsonwebtoken'),
  config = require('../../config').config(),
  errors = require('../helpers/errors'),
  Store = require('../../models/store'),
  Product = require('../../models/product'),
  { concat } = require('lodash');

function addStoreProduct(req, res) {
  const store = await Store.findById(req.body.store);
  const product = await Product.findById(req.body.product);

  concat(store.products, { req.body.price, true, product });
}

exports.addStoreProduct = addStoreProduct;
