const jwt = require('jsonwebtoken'),
  config = require('../../config').config(),
  errors = require('../helpers/errors'),
  City = require('../../models/city'),
  StoreCommunity = require('../../models/storeCommunity'),
  { concat } = require('lodash');

function addStoreCommunity(req, res) {
  const city = await City.findById(req.body.city);
  const community = new StoreCommunity();
  community.name = req.body.name;
  community.description = req.body.description;
  community.address = req.body.address;
  community.city = city;
  community.stores = [];

  community.save(function (err) {
   if (err) {
     console.log(err);
   };
  });

  concat(city.communities, community);
}

exports.addStoreCommunity = addStoreCommunity;
