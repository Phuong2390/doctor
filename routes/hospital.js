const express = require('express');
const router = express.Router();

const HospitalController = require('../http/controller/hospital-controller');
const condition = require('../src/search-services/');

let hospitalController = new HospitalController();

router.get('/', (request, response, next) => {
    request.codition = new condition.UndeletedSearch();
    next();
}, hospitalController.search);

router.get('/search/keyword', (request, response, next) => {
    request.codition = new condition.KeywordSearch(request.query.keyword);
    next();
}, hospitalController.search);

router.get('/search/top', (request, response, next) => {
    request.codition = new condition.TopRateSeaarch(request.query.top);
    next();
}, hospitalController.search);

router.post('/add', hospitalController.add);

module.exports = router;
