const jwt = require('jsonwebtoken'),
  config = require('../../../config').config(),
  Category = require('../../models/category');

function addCategory(req, res) {
  const category = new Category();
  category.name = req.body.name;
  category.subcategories = [];

  category.save(function (err) {
     if (err) {
       console.log(err);
       return err;
     };
  });

  res.json({
    message: 'Category added.'
  });
}

exports.addCategory = addCategory;
