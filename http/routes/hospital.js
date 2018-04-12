const express = require('express');
const router = express.Router();

const HospitalController = require('../controller/hospital-controller');
const middleware = require('../middleware/hospital/index');

let hospitalController = new HospitalController();

router.get('/', middleware.searchCondition, hospitalController.search);

router.get('/search/keyword', middleware.searchCondition, hospitalController.search);

router.get('/search/top', middleware.searchCondition, hospitalController.search);

router.post('/add', middleware.postHospital, hospitalController.add);

router.put('/edit/:id', middleware.putHospital, hospitalController.edit);

router.get('/:id', hospitalController.detail);

module.exports = router;
