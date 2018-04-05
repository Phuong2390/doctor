const RateRepository = require('./src/rate/rate-repository');
const connection = require('./database/connection');
const Rate = require('./src/rate/rate');
const User = require('./src/account/user/user');
const Hospital = require('./src/hospital/hospital');
const HospitalRepo = require('./src/hospital/hospital-repository');
const Authenticate = require('./src/account/authenticator/authenticator');
const CredentialRepo = require('./src/account/credential/credential-repository');
const Encoder = require('./src/account/encoder/encoder');
const Credential = require('./src/account/credential/credential');

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
rate.setScore(5);
rate.setId(10);

let rateRepo = new RateRepository(connection);

rateRepo.edit(rate).then(function () {
    console.log('thanh cong');
});