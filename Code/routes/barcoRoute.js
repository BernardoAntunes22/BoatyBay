var express = require('express');
var router = express.Router();
const mBarco = require('../models/barcoModel');


/* GET users listing. */
router.get('/getByCliente/:cliente', async function(req, res, next) {
  let barcos = await mBarco.getByCliente(req.params.cliente);
  res.send(barcos);
});

router.get('/', async function(req, res, next) {
  let barcos = await mBarco.select();
  res.send(barcos);
});




module.exports = router;
