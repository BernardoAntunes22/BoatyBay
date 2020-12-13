var express = require('express');
var router = express.Router();
const Marina = require('../models/marinaModel');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let marinas = await Marina.select();
  res.send(marinas);
});

router.post('/', async function(req, res, next) {
  let marinas = await Marina.create(req.body);
  res.send(marinas);
});

module.exports = router;
