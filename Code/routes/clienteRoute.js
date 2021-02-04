var express = require('express');
var router = express.Router();
const mCliente = require('../models/clienteModel');
const mMarina = require('../models/marinaModel');
const mAdmin = require('../models/adminModel');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let clientes = await mCliente.getByCliente();
  res.send(clientes);
});

router.get("/login/:name", async function(req, res) {
  let name = req.params.name;
  let clientes = await mCliente.selectByName(name);
  let marinas = await mMarina.selectByName(name);
  let admin = await mAdmin.selectByName(name)

  let response = 'Failed';
  if(clientes.length > 0){
    response = clientes[0];
    response.accountType = "Cliente";
  }
  else if(marinas.length > 0){
    response = marinas[0];
    response.accountType = "Marina";
  } 
  else if(admin.length > 0){
    response = admin[0];
    response.accountType = "Administrador"
  }

  res.send(response);
});

router.get("/getByName/:name", async function(req, res) {
  let name = req.params.name;
  let clientes = await mCliente.selectByName(name);
  res.send(clientes[0]);
});

module.exports = router;
