var express = require('express');
var router = express.Router();
const Reserva = require('../models/reservaModel');
const Barco = require('../models/barcoModel');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let reservas = await Reserva.select();
  res.send(reservas);
});

router.post('/', async function(req, res, next) {
  try {
    let tipoBarco = await Barco.selectById(req.body.B_id);
    req.body.R_reservaLugar = tipoBarco.B_size;
    let reservas = await Reserva.create(req.body);
    res.send(reservas);
  }
  catch(err) {
    res.status(400).send(err);
  }
});

router.put('/:id', async function(req, res, next) {
  console.log(req.body);
  let reserva = await Reserva.update(req.params.id, req.body);
  res.send(reserva);
});

router.get('/getByCliente/:reserva', async function(req, res, next) {
  let reserva = await Reserva.getByCliente(req.params.reserva);
  res.send(reserva);
});

router.delete('/:id', async function(req, res, next) {
  let reserva = await Reserva.delete(req.params.id);
  res.send({rowsAffected: reserva});
});

router.get('/getByid/:reserva', async function(req, res, next) {
  let reserva = await Reserva.getByid(req.params.reserva);
  res.send(reserva);
});


router.get('/getByMarina/:marina', async function(req, res, next) {
  let marina = await Reserva.getByMarina(req.params.marina);
  res.send(marina);
});

router.get('/getEvery/', async function(req, res, next) {
  let reservas = await Reserva.getEvery();
  res.send(reservas);
});

module.exports = router;

