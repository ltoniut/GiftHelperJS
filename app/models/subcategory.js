const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Category = require('./category'),
  bcrypt = require('bcrypt-nodejs'),
  config = require('../../config').config(),
  fs = require('fs'),
  { concat } = require('lodash');

const SubcategorySchema = new Schema({
  name: { type: String, required: 'Subcategory name is required.', unique: false, maxlength: [70, 'Subcategory name should have at most 70 characters.'] },
  category: { type: Schema.Types.ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Subcategory', SubcategorySchema);
