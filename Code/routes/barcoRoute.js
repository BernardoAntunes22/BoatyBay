var express = require('express');
var router = express.Router();
const Barco = require('../models/barcoModel');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let barcos = await Barco.select();
  res.send(barcos);
});

router.post('/', async function(req, res, next) {
  let barcos = await Barco.create(req.body);
  res.send(barcos);
});

module.exports = router;
