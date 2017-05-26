var express = require('express');
var form = require('../components/brandForm');
var router = express.Router();
var ReactDOM = require('react-dom');

/* GET home page. */
router.get('/', function(req, res, next) {
  ReactDOM.render(form, { title: 'Form' });
});

module.exports = router;
