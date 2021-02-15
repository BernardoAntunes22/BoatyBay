var express = require('express');
var router = express.Router();
const Marina = require('../models/marinaModel');


/* GET users listing. */
router.get('/', async function(req, res, next) {
  let marinas = await Marina.select();
  res.send(marinas);
});



router.get('/getByCP/:marina', async function(req, res, next) {
  let marinas = await Marina.getCP(req.params.marina);
  res.send(marinas);
});


router.put('/:id', async function(req, res, next) {
  console.log(req.body);
  let marinas = await Marina.update(req.params.id, req.body);
  res.send(marinas);
});


router.delete('/:id', async function(req, res, next) {
  let marinas = await Marina.delete(req.params.id);
  res.send({rowsAffected: marinas});
});





module.exports = router;
