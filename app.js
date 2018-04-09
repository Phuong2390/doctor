const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const connection = require('./database/connection');
const HospitalRepository = require('./src/hospital/hospital-repository');
const HospitalSearcher = require('./src/search-services/searcher');

const indexRouter = require('./routes/index');
const hospitalRouter = require('./routes/hospital');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('hospitalRepo', new HospitalRepository(connection));
app.set('hospitalSearcher', new HospitalSearcher(connection));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/hospitals', hospitalRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
