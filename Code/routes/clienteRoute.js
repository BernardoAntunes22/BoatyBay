var express = require('express');
var router = express.Router();
const Cliente = require('../models/clienteModel');


/* GET users listing. */
router.get('/', async function(req, res, ) {
  let clientes = await Cliente.select();
  res.send(clientes);
});

router.post('/', async function(req, res, ) {
  let clientes = await Cliente.create(req.body);
  res.send(clientes);
});

router.get("/login/:name", async function(req, res) {
  let name = req.params.name;
  let clientes = await Cliente.selectByName(name);
  res.send(clientes.length > 0);
});

router.get("/getByName/:name", async function(req, res) {
  let name = req.params.name;
  let clientes = await Cliente.selectByName(name);
  res.send(clientes[0]);
});

module.exports = router;
