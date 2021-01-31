var express = require('express');
var router = express.Router();
const Reserva = require('../models/reservaModel');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let reservas = await Reserva.select();
  res.send(reservas);
});

router.post('/', async function(req, res, next) {
  let reservas = await Reserva.create(req.body);
  res.send(reservas);
});


router.get('/getByMarina/:marina', async function(req, res, next) {
  let marina = await Reserva.getByMarina(req.params.marina);
  res.send(marina);
});


module.exports = router;

