const jwt = require('jsonwebtoken'),
  config = require('../../config').config(),
  errors = require('../helpers/errors'),
  Product = require('../../models/product'),
  Subcategory = require('../../models/subcategory'),
  Brand = require('../../models/brand');

function addProduct(req, res) {
  const product = new Product();
  const subcategory = await Subcategory.findById(req.body.subcategory);
  const brand = await Brand.findById(req.body.brand);
  product.name = req.body.name;
  product.description = req.body.description;
  product.subcategory = subcategory;
  product.brand = brand;

  product.save(function (err) {
   if (err) {
     console.log(err);
   };
  });

  concat(brand.products, product);
}

exports.addProduct = addProduct;
