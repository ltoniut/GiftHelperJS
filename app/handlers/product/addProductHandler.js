const jwt = require('jsonwebtoken'),
  config = require('../../../config').config(),
  Product = require('../../models/product'),
  Subcategory = require('../../models/subcategory'),
  Brand = require('../../models/brand');

async function addProduct(req, res) {
  const product = new Product();
  const subcategory = await Subcategory.findById(req.body.subcategory).exec(function (err, subcategory) {
    if (err) return handleError(err);
  });
  const brand = await Brand.findById(req.body.brand).exec(function (err, subcategory) {
    if (err) return handleError(err);
  });
  product.name = req.body.name;
  product.description = req.body.description;
  product.subcategory = subcategory;
  product.brand = brand;

  product.subc

  product.save(function (err) {
   if (err) {
     console.log(err);
   };
  });

  concat(brand.products, product);
}

exports.addProduct = addProduct;
