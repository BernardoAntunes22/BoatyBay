var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connection = require('./models/connection');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clienteRoute = require('./routes/clienteRoute');
var barcoRoute = require('./routes/barcoRoute');
var marinaRoute = require('./routes/marinaRoute');
var reservaRoute = require('./routes/reservaRoute');




var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/API/barcos', barcoRoute);
app.use('/API/clientes', clienteRoute);
app.use('/API/marinas', marinaRoute);
app.use('/API/reservas', reservaRoute);
app.use('/users', usersRouter);


module.exports = app;


