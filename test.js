const RateRepository = require('./src/rate/rate-repository');
const connection = require('./database/connection');
const Rate = require('./src/rate/rate');
const User = require('./src/account/user/user');
const Hospital = require('./src/hospital/hospital');
const HospitalRepo = require('./src/hospital/hospital-repository');

let hospital = new Hospital('Benh vien VH', 3);
hospital.setDescribe('Benh vien DN');
hospital.setId(2);

// let hospitalRepo = new HospitalRepo(connection);
// hospitalRepo.add(hospital).then(function () {
//     console.log('thanh cong');
// });

let user = new User();
user.setFirstName('Phuong');
user.setLastName('Thai Binh');

let rate = new Rate(user, hospital);
rate.setContent('Fuck');
rate.setScore(10);

let rateRepo = new RateRepository(connection);

rateRepo.add(rate).then(function () {
    console.log('thanh cong');
});