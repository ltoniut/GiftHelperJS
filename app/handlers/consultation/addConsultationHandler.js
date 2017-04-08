const jwt = require('jsonwebtoken'),
  config = require('../../config').config(),
  errors = require('../helpers/errors'),
  Consultation = require('../../models/city');

function addConsultation(req, res) {
  const consultation = new Consultation();

  consultation.save(function (err) {
   if (err) {
     console.log(err);
   };
  });
}

exports.addConsultation = addConsultation;
