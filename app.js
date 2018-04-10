const createError = require('http-errors');
const express = require('express');
const session  = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

let options = {
    host: 'localhost',
    user: 'root',
    password: '169614',
    database: 'doctor'
};



let sessionStore = new MySQLStore(options);
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const connection = require('./database/connection');
const HospitalRepository = require('./src/hospital/hospital-repository');
const HospitalSearcher = require('./src/search-services/searcher');
const HospitalFactory = require('./src/hospital/hospital-factory');
const FilterSearchCondition = require('./http/middleware/hospital/filter-search-condition');
const condition = require('./src/search-services');

const indexRouter = require('./routes/index');
const hospitalRouter = require('./routes/hospital');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.set('sessionStore', sessionStore);
app.set('hospitalRepo', new HospitalRepository(connection));
app.set('hospitalSearcher', new HospitalSearcher(connection, new HospitalFactory()));
app.set('hospitalFactory', new HospitalFactory());
app.set('filterSearchCondition', new FilterSearchCondition(condition));

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
