const jwt = require('jsonwebtoken'),
  config = require('../../../config').config(),
  Category = require('../../models/category'),
  Subcategory = require('../../models/subcategory'),
  { concat } = require('lodash');

async function addSubcategory(req, res) {
  const subcategory = new Subcategory();
  subcategory.name = req.body.name;
  subcategory.products = [];
  subcategory.categories = [];

  var category;

  /* req.body.categories.forEach(async function(categoryIndex) {
    category = await Category.findById(categoryIndex);

    subcategory.categories.add(category);

    await Category.findByIdAndUpdate(categoryIndex,  { '$push': { 'subcategories': subcategory } }, { new : true });
  }); */

  await Promise.all(req.body.categories).then(categoryIndex => addCategory(subcategory, categoryIndex));

  subcategory.save(function (err) {
     if (err) {
       console.log(err);
       return err;
     };
  });

  res.json({
    message: 'Subcategory added.'
  });
}

async function addCategory(subcategory, categoryIndex) {
  const category = await Category.findById(categoryIndex);
  subcategory.categories.add(category);

  await Category.findByIdAndUpdate(categoryIndex,  { '$push': { 'subcategories': subcategory } }, { new : true });
}


exports.addSubcategory = addSubcategory;
