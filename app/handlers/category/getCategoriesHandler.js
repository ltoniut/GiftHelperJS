const jwt = require('jsonwebtoken'),
  config = require('../../../config').config(),
  Category = require('../../models/category');

async function getCategories(req, res) {
  const categories = await Category.find();

  res.json(categories);
}

exports.getCategories = getCategories;
