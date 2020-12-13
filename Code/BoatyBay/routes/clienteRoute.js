var express = require('express');
var router = express.Router();
const Cliente = require('../models/clienteModel');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let clientes = await Cliente.select();
  res.send(clientes);
});

router.post('/', async function(req, res, next) {
  let clientes = await Cliente.create(req.body);
  res.send(clientes);
});

module.exports = router;
