const jwt = require('jsonwebtoken'),
  config = require('../../config').config(),
  errors = require('../helpers/errors'),
  Store = require('../../models/store'),
  StoreCommunity = require('../../models/storeCommunity'),
  { concat } = require('lodash');

function addStore(req, res) {
  const storeCommunity = await StoreCommunity.findById(req.body.storeCommunity);
  const store = new Store();
  store.name = req.body.name;
  store.community = storeCommunity;
  store.directions = req.body.directions;
  store.products = [];

  store.save(function (err) {
   if (err) {
     console.log(err);
   };
  });

  concat(storeCommunity.stores, store);
}

exports.addStore = addStore;
