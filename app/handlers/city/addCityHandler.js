const jwt = require('jsonwebtoken'),
  config = require('../../../config').config(),
  City = require('../../models/city');

function addCity(req, res) {
  const city = new City();
  city.name = req.body.name;
  city.communities = [];

  city.save(function (err) {
   if (err) {
     console.log(err);
   };
  });
}

exports.addCity = addCity;
