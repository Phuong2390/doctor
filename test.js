const RateRepository = require('./src/rate/rate-repository');
const connection = require('./database/connection');
const Rate = require('./src/rate/rate');
const User = require('./src/account/user/user');
const Hospital = require('./src/hospital/hospital');

connection('rates').avg('score').where({
    hospital_id: 6
}).then(function (result) {
    console.log(result);
});