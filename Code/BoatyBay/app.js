var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Database = require('./models/database');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clienteRoute = require('./routes/clienteRoute');

Database.setConnection({ 
    host: 'remotemysql.com',
    user: 'TWwWfg2W6b',
    password: 'A0cJ9cV5kj',
    database: 'TWwWfg2W6b',
    port: '3306'
});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/API/clientes', clienteRoute);
app.use('/users', usersRouter);
module.exports = app;


