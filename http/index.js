const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const hospitalRouter = require('./routes/hospital');

module.exports = function (app) {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', indexRouter);
    app.use('/hospitals', hospitalRouter);


    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
};